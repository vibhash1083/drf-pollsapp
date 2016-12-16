import React, { PropTypes, Component } from 'react';

import {connect} from 'react-redux';

import {Link} from 'react-router';

export default class Quiz extends Component {


  render() {
    const { question, i ,actions } = this.props;

    return (
    		<div>
	              	<div className='QuizSection'>
	                	<ul><Link to={`/quiz/${question.id}`}>{i+1} {question.question}</Link>
	                	<br/>
	                	</ul>
	              	</div>
            </div>
            );
    }
}

