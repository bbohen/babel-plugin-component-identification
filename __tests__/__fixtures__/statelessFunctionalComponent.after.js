'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Example react es2015 class component for static analysis only
 */
var statelessFunctionalComponent = function statelessFunctionalComponent(props) {
  var anotherFunctionalComponent = function anotherFunctionalComponent(_ref) {
    var msg = _ref.msg;
    return _react2.default.createElement(
      'div',
      {
        'data-component-id': 'anotherFunctionalComponent'
      },
      msg
    );
  };
  return _react2.default.createElement(
    'div',
    {
      'data-component-id': 'statelessFunctionalComponent'
    },
    _react2.default.createElement(
      'h1',
      null,
      'I am a stateless functional component'
    ),
    anotherFunctionalComponent('Hello!')
  );
};

statelessFunctionalComponent.propTypes = {
  foo: _react.PropTypes.string.isRequired
};

exports.default = statelessFunctionalComponent;
