import React, { PropTypes, Component } from 'react';

import {connect} from 'react-redux';

import {Link} from 'react-router';


export default class Quiz extends Component {


  render() {
    const { question, i ,actions } = this.props;



    return (
              <div className='ListSection'>

                <ul><Link to={`/quiz/${question.id}`}>{i+1} {question.question}</Link></ul>


              </div>
            );
    }
}