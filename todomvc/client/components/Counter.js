import React, { Component, PropTypes } from 'react'

class Counter extends Component {
	
	constructor(props) {
    						super(props)
    						this.state = {
      										counter: 0
    									}
						}

  addOne() {
    			this.setState({counter: this.state.counter + 1})
			}
  
  render() {
  	console.log("In Counter");
  	console.log(this.props);
    return (
    <div>
      <p>Total Score: {this.props.score}</p>
      <button onClick={ this.addOne }>Finish</button>
    </div>
    )
  }
}

export default Counter
