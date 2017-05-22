'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Example react es2015 class component for static analysis only
 */
var SampleClassComponent = function (_Component) {
  _inherits(SampleClassComponent, _Component);

  function SampleClassComponent() {
    _classCallCheck(this, SampleClassComponent);

    var _this = _possibleConstructorReturn(this, (SampleClassComponent.__proto__ || Object.getPrototypeOf(SampleClassComponent)).call(this));

    _this.doSomething = _this.doSomething.bind(_this);
    _this.state = {
      foo: true
    };
    return _this;
  }

  _createClass(SampleClassComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        foo: false
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.makeFoo();
    }
  }, {
    key: 'doSomething',
    value: function doSomething() {
      this.setState({
        foo: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var foo = this.props.foo;

      return _react2.default.createElement(
        'div',
        { onClick: this.doSomething, 'data-component-id': 'SampleClassComponent'
        },
        _react2.default.createElement(
          'h1',
          null,
          'I am a class component!'
        ),
        _react2.default.createElement(
          'div',
          null,
          foo
        )
      );
    }
  }]);

  return SampleClassComponent;
}(_react.Component);

SampleClassComponent.propTypes = {
  foo: _react.PropTypes.string,
  makeFoo: _react.PropTypes.func
};
SampleClassComponent.defaultProps = {
  foo: 'bar',
  makeFoo: function makeFoo() {
    return 'bar';
  }
};
exports.default = SampleClassComponent;
