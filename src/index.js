export default function ({ types: t }) {
  let className;

  return {
    name: 'babel-plugin-component-identification',
    visitor: {
      ClassDeclaration({ node: { id: { name } } }) {
        className = name;
      },
      ReturnStatement(path) {
        const { node: { argument } } = path;
        if (argument.type !== 'JSXElement') {
          return;
        }
        const { node: { id: parentId }, parent: functionalComponent } = path.getFunctionParent();
        const isClassRenderMethod = className && parentId && parentId.name === 'render';
        let identity = 'unknown';

        if (isClassRenderMethod) {
          identity = className;
        } else if (functionalComponent) {
          identity = functionalComponent.id.name;
        }

        const newAttributes = [
          t.jSXAttribute(
            t.jSXIdentifier('data-component-id'),
            t.stringLiteral(identity),
          ),
        ];

        argument.openingElement.attributes.push(...newAttributes);
      },
    },
  };
}
