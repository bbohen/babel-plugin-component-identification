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
        if (argument && argument.type !== 'JSXElement') {
          return;
        }
        const { node: { id: parentId }, parent: functionalComponent } = path.getFunctionParent();
        const isClassInstanceMethod = parentId && parentId.name;
        const isClassRenderMethod = className && parentId && parentId.name === 'render';
        const isFunctionalComponent = functionalComponent && functionalComponent.id;
        let identity;

        if (isClassRenderMethod) {
          identity = className;
        } else if (isFunctionalComponent) {
          identity = functionalComponent.id.name;
        } else if (isClassInstanceMethod) {
          identity = parentId.name;
        } else {
          // last ditch effort at looking for a named component
          // might just want to ignore these entirely
          const {
            node: { declarations: [{ name: variableDeclarationName }] },
          } = path.findParent(pp => pp.isVariableDeclaration());
          identity = variableDeclarationName;
        }

        if (argument && identity) {
          const newAttributes = [
            t.jSXAttribute(
              t.jSXIdentifier('data-component-id'),
              t.stringLiteral(identity),
            ),
          ];

          if (argument) {
            argument.openingElement.attributes.push(...newAttributes);
          }
        }
      },
    },
  };
}
