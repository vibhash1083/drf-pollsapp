import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';
import AdvTextInput from './AdvTextInput';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    addAdv: PropTypes.func.isRequired
  };

  todohandleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }
  advhandleSave(text) {
    if (text.length !== 0) {
      this.props.addAdv(text);
    }
  }

  render() {
    return (
      <header className='header'>

          <h2>Question</h2>
          <AdvTextInput />

      </header>
    );
  }
}