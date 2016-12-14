import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import QuesTextInput from './QuesTextInput';

export default class QuesItem extends Component {
  static propTypes = {
    ques: PropTypes.object.isRequired
  };

 render() {
    const {ques} = this.props;

    let  element = (
        <QuesTextInput question={ques.question}
                        answer={ques.answer} />
      );

    return (
      <li>
        {element}
      </li>
    );
  }
}
