import React, { PropTypes, Component } from 'react';

import {connect} from 'react-redux';

import {Link} from 'react-router';

export default class Quiz extends Component {


  render() {
    const { question, i ,actions } = this.props;
    console.log("getting count")
    console.log(this.props.ques.score);

    return (
    		<div>
	              	<div className='QuizSection'>
	                	<ul>{i+1} <Link to={`/quiz/${question.id}`}>{question.question}</Link>
	                	<br/>
	                	</ul>
	              	</div>
            </div>
            );
    }
}