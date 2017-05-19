import React, { Component, PropTypes } from 'react';

/**
 * Example react es2015 class component for static analysis only
 */
class SampleClassComponent extends Component {

  static propTypes = {
    foo: PropTypes.string,
    makeFoo: PropTypes.func
  };

  static defaultProps = {
    foo: 'bar',
    makeFoo: () => 'bar'
  };

  constructor() {
    super();
    this.doSomething = this.doSomething.bind(this);
    this.state = {
      foo: true
    }
  }

  componentWillMount() {
    this.setState({
      foo: false
    });
  }

  componentDidMount() {
    this.props.makeFoo();
  }

  doSomething() {
    this.setState({
      foo: true
    });
  }

  render() {
    const {
      foo
    } = this.props;
    return (
      <div onClick={this.doSomething}>
        <h1>I am a class component!</h1>
        <div>{foo}</div>
      </div>
    );
  }
}

export default SampleClassComponent
