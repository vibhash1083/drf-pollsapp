import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router';
import * as QuesActions from '../actions/QuesActions';

class Choices extends Component {

    handleOptionChange(changeEvent) {
      /*  this.setState({
            selectedOption: changeEvent.target.value
            });*/
        console.log('Button Selected', changeEvent.target.value);
        
    };

    render(){

        let choice_div = null;
        if (this.props.choice.question == this.props.params.id) 
        {
            choice_div = <p><input type="radio" value={ this.props.choice.id } name={this.props.choice_text} 
            onChange={this.handleOptionChange}/>
                { this.props.choice.choice_text }</p>
        }

        console.log('Choices Section');
        console.log(this.props);
        return(
            <label>
            
                {choice_div}

            </label>
            );
        
    }
    /*
    render() {

    console.log('in Choices',this.props.params.id);

    let choice_div = null;
    if (this.props.choice.question == this.props.params.id) 
    {
      choice_div = <p>{this.props.choice.choice_text}</p>
    }

    return (
              <div className='Choice'>
              {choice_div} 
              </div>
            );
    }*/
}

export default Choices;