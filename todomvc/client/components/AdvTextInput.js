import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class AdvTextInput extends Component {
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

  render() {
    return (
        <form>
          <input type="text" placeholder="Advertiser Name"/>
          <input type="submit"/>
        </form>
    );
  }
}

export default AdvTextInput;