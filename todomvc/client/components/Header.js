import React, { PropTypes, Component } from 'react';
import QuesTextInput from './QuesTextInput';

export default class Header extends Component {
  static propTypes = {
    addQues: PropTypes.func.isRequired
  };

  handleSave(question,answer) {

      this.props.addQues(question,answer);

  }

  render() {
    return (
      <header className='header'>
          <h1>Questions</h1>
          <QuesTextInput
                         onSave={::this.handleSave}
                         placeholder='What needs to be done?' />
      </header>
    );
  }
}