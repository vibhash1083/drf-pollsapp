import React, { PropTypes, Component } from 'react';

import {connect} from 'react-redux';

import {Link} from 'react-router';


export default class QuesSection extends Component {
	constructor(props) {
        super(props)

        this.state = {
            correct: 0,
            incorrect: 0,
            checked: false
        }
    }

    quizHandler(e) 
    {
    	e.preventDefault();
    	console.log("In quizHandler");
    	console.log(this.props);
    	let correctans = 0;
    	let incorrectans = 0;


    	const answer = this.refs.answer.value
    	console.log('answer',answer);
    	console.log('actualans',this.props.question.answer);
    	console.log('correctstate', this.state.correct);
    	if (answer === this.props.question.answer)
    	{
    		correctans++;
    	}
    	else
    	{
    		incorrectans++;
    	}	

    	console.log(correctans);
    	console.log(incorrectans);

    	this.setState({
            correct: correctans,
            incorrect: incorrectans,
            checked: true
        })

 		console.log('correctstate', this.state.correct);
    }


  render() {
    const { question, i ,actions } = this.props;
    console.log('in ListSection',this.props);


    return (
    		<div>
	              	<div className='ListSection'>
	                	<ul><Link to={`/quiz/${question.id}`}>{i+1} {question.question}</Link><br/>
	                		<form ref='singleForm' onSubmit={this.quizHandler.bind(this)}>
			                    Answer: <input type='text' ref='answer' placeholder='answer'/><br/>
			                    <input type='submit'/>
			                </form></ul>
	              	</div>
            </div>
            );
    }
}