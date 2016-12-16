import React, { PropTypes, Component } from 'react';

import {connect} from 'react-redux';

import {Link} from 'react-router';


export default class Single extends Component {

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
        this.refs.btn.setAttribute("disabled", "disabled");
    }

  render() {
    const {handleSubmit, question, i ,actions } = this.props;
    console.log('Single Section',this.props);


    return (
              <div className='SingleSection'>
              <h2>Answer the following Question</h2>
                <ul> <b>{question.question}</b></ul>
                <form ref='singleForm' onSubmit={this.quizHandler.bind(this)}>
                    Answer: <input type='text' ref='answer' placeholder='answer'/><br/><br/>
                    <input ref='btn' type='submit'/>
                </form>
                <div>
                            <h4>{this.state.correct} correct</h4>
                            <h4>{this.state.incorrect} incorrect</h4>
                </div>
                <Link to={"quiz/"}>Go Back to List of Questions</Link>
              </div>
            );
    }
}

function mapStateToProps(state) {
    return {
        questions: state.questions
    }
}


