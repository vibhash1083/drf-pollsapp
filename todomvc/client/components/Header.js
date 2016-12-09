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
          <h1>todos</h1>
          <TodoTextInput newTodo={true}
                         onSave={::this.todohandleSave}
                         placeholder='What needs to be done?' />
          <h1>advs</h1>
          <AdvTextInput newAdv={true}
                         onSave={::this.advhandleSave}
                         placeholder='What needs to be done?' />

      </header>
    );
  }
}
