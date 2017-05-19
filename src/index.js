export default function ({ types: t }) {
  const isRender = ({ key: { name }, kind }) => (name === 'render' && kind === 'method');
  const isReturn = ({ type }) => type === 'ReturnStatement';

  return {
    name: 'babel-plugin-component-identification',
    visitor: {
      // TODO: Handle stateless function components + a test for HOCs
      ClassDeclaration({ node }) {
        const [renderMethod] = node.body.body.filter(isRender);
        const [returnStatement] = (renderMethod && renderMethod.body.body.filter(isReturn)) || [];
        const { argument } = returnStatement || {};

        // make sure the class is returning jsx
        if (!returnStatement || argument.type !== 'JSXElement') {
          return;
        }

        // name it
        const { name } = node.id;
        const newAttributes = [t.jSXAttribute(
          t.jSXIdentifier('data-id'),
          t.stringLiteral(name),
        )];

        argument.openingElement.attributes.push(...newAttributes);
      },
    },
  };
}
