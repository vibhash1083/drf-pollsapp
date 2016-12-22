import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router';

class Choices extends Component {

    render(){

        console.log(this.props);
            <label>
            <input type="radio" value="{ this.state.choice.id }" checked={this.state.selectedOption === '1'} onChange={this.handleOptionChange}/>
            { this.props.choice.choice_text }
        </label>
        
    }
    /*
    render() {

    console.log('in Choices',this.props.params.id);

    let choice_div = null;
    if (this.props.choice.question == this.props.params.id) 
    {
      choice_div = <ul><p>{this.props.choice.choice_text}</p></ul>;
    }

    return (
              <div className='ListSection'>
              {choice_div} 
              </div>
            );
    }*/
}


export default Choices;
