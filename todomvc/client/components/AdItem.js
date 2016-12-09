import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import AdTextInput from './AdTextInput';

export default class AdItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
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
      this.props.deleteTodo(id);
    /*} else {
      this.props.editTodo(Object.assign({}, this.props.todo, {text: text}));
    }*/
    this.setState({ editing: false });
  }

  render() {
    const {ad, deleteAd} = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <AdTextInput name={ad.name}
                       editing={this.state.editing}
                       onSave={(name) => this.handleSave(ad.id, text)} />
      );
    }

    return (
      <li>
        {element}
      </li>
    );
  }
}
