import React, { Component, PropTypes } from 'react'

class Counter extends Component {
  
  render() {
  	console.log("In Counter");
  	console.log(this.props);
    return (
      <p></p>
    )
  }
}

export default Counter
