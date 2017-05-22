import pluginTest from 'babel-plugin-tester';
import path from 'path';
import plugin from '../src';

pluginTest({
  plugin,
  babelOptions: {
    extends: path.resolve(__dirname, '..', '.babelrc'),
  },
  fixtures: path.join(__dirname, '__fixtures__'),
  tests: [
    {
      title: 'Adds identifier to an es2015 class component',
      fixture: 'classComponent.before.js',
      outputFixture: 'classComponent.after.js',
    },
    {
      title: 'Adds identifier to a stateless functional component',
      fixture: 'statelessFunctionalComponent.before.js',
      outputFixture: 'statelessFunctionalComponent.after.js',
    },
  ],
});
