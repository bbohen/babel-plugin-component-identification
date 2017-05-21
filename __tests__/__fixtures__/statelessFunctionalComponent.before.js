import React, { PropTypes } from 'react';

/**
 * Example react es2015 class component for static analysis only
 */
const statelessFunctionalComponent = (props) => {
  const anotherFunctionalComponent = ({ msg }) => <div>{msg}</div>
  return(
    <div>
      <h1>I am a stateless functional component</h1>
      {anotherFunctionalComponent('Hello!')}
    </div>
  )
}

statelessFunctionalComponent.propTypes = {
  foo: PropTypes.string.isRequired
}

export default statelessFunctionalComponent;
