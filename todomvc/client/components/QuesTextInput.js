import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class QuesTextInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      question: this.props.question,
      answer: this.props.answer
    };
  }

  handleSubmit(e){
        e.preventDefault();
        const question = this.refs.question.value;
        const answer = this.refs.answer.value;
        this.props.addQues(question, answer);
    }

  render() {
    return (
        <div className="list-group-item">
                <form ref='questionForm' className='comment-form' onSubmit={this.handleSubmit}>
                    Question: <input type='text' ref='question' placeholder='question'/><br/>
                    Answer: <input type='text' ref='answer' placeholder='answer'/><br/>
                    <input type='submit'/>
                </form>
        </div>
    );
  }
}

export default QuesTextInput;