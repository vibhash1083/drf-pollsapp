import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router';

class Choices extends Component {

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
    }
}


export default Choices;
