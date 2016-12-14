import React, { PropTypes, Component } from 'react';
import QuesTextInput from './QuesTextInput';

export default class Header extends Component {
  static propTypes = {
    addQues: PropTypes.func.isRequired,
  };

  todohandleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  queshandleSave(question_text, answer_text) {
      this.props.addQues(question_text, answer_text);
  }

  render() {
    return (
      <header className='header'>
        <h2>Add a Question</h2>
        <QuesTextInput />
      </header>
    );
  }
}