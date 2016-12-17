import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class QuestionsHandler extends Component 
{

  constructor(props, context) 
  {
    super(props, context);
    this.state = {
                    question: this.props.question || '',
                    answer: this.props.answer || ''

                  };
  }

  static propTypes = {
        question: PropTypes.string,
        answer: PropTypes.string,
        placeholder: PropTypes.string,
  };

  handleSubmit(e)
  {
        e.preventDefault();
        const question = this.refs.question.value;
        const answer = this.refs.answer.value;

        this.props.addQues(question,answer);
        this.refs.questionForm.reset();
  }


  render() {
    return (
      <header className='header'>
          <h2>Manage Questions</h2>
          <h4>Add a question</h4>
          <div className="list-group-item">
                    <form ref='questionForm' onSubmit={this.handleSubmit.bind(this)}>
                        Question: <input type='text' ref='question' placeholder='Question'/><br/>
                        Answer: <input type='text' ref='answer' placeholder='Answer'/><br/><br/>
                        
                        <input type='submit'/>
                    </form>
            </div>
      </header>
    );
  }
}