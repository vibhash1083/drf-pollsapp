import React, { PropTypes, Component } from 'react';

import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router';

export default class Single extends Component {

  constructor(props) {
        super(props);
        this.state = {
                        question: '',
                        id : ''
                    }
        }

    render() {
    const { question, i ,actions } = this.props;
    return (
              <div className='ListSection'>
                <ul><p> Single question </p></ul>
              </div>
            );
    }
}