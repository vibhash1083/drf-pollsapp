import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import AdvTextInput from './AdvTextInput';

export default class AdvItem extends Component {
  static propTypes = {
    adv: PropTypes.object.isRequired,
    deleteAdv: PropTypes.func.isRequired

  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }
/*
  handleDoubleClick() {
    this.setState({ editing: true });
  }*/

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteAdv(id);
    /*} else {
      this.props.editTodo(Object.assign({}, this.props.todo, {text: text}));
    }*/
    this.setState({ editing: false });
  }

  render() {
    const {adv, deleteAdv} = this.props;

    let element;
    if (this.state.editing) {
    let  element = (
        <AdvTextInput name={adv.name}
                       editing={this.state.editing}
                       onSave={(name) => this.handleSave(adv.id, text)} />
      );
    }

    return (
      <li>
        {element}
      </li>
    );
  }
}
