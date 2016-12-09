import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class AdvTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    newAdv: PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || ''
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newAdv) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.newAdv) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <input className={classnames({
              'new-adv': this.props.newAdv
             })}
             type='text'
             placeholder={this.props.placeholder}
             autoFocus='true'
             value={this.state.name}
             onBlur={::this.handleBlur}
             onChange={::this.handleChange}
             onKeyDown={::this.handleSubmit} />
    );
  }
}
