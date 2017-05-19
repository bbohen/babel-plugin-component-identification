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
      title: 'Handles es2015 class component identification',
      fixture: 'classComponent.before.js',
      outputFixture: 'classComponent.after.js',
    },
  ],
});
