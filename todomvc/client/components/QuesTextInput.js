import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class QuesTextInput extends Component {

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    question: PropTypes.string,
    answer: PropTypes.string,
    placeholder: PropTypes.string,
  };

    handleSubmit(e){
        e.preventDefault();
        const question = this.refs.question.value;
        const answer = this.refs.answer.value;
        console.log(question, answer,this.props);
        this.actions.addQues(question, answer);
    }

    render() {
        return (
            <div className="list-group-item">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        Question: <input type='text' ref='question' placeholder='question'/><br/>
                        Answer: <input type='text' ref='answer' placeholder='answer'/><br/>
                        <input type='submit'/>
                    </form>
            </div>
        );
    }
}

export default QuesTextInput;