import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router';

export default class Questions extends Component {

    render() {
    const { question, i ,actions } = this.props;
    return (
              <div className='QuestionSection'>
                <ul><p>{i+1} <Link to={`/question/${question.id}`}>{question.question_text} </Link> </p></ul>
              </div>
            );
    }
}