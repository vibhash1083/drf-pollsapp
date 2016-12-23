import React, { PropTypes, Component } from 'react';

class Options extends Component{
  renderOption(choices, i) {
    return (
      <div className="option" key={i}>
        <p>
          {choices.choice_text}
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className="options">
        {this.props.quesOptions.map(this.renderOption)}      
      </div>
    )
  }
};

export default Options;
