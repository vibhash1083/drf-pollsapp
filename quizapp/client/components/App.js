import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
import classnames from 'classnames';

import QuesSection from '../components/QuesSection';
import QuestionsHandler from '../components/QuestionsHandler';
import * as QuesActions from '../actions/QuesActions';

class App extends Component {

  render() 
  {
    const { ques, actions } = this.props;

    return (
      <div>
        <h3>Questions List</h3>
      </div>
    );
  }
}

function mapState(state) {
  return {
    ques: state.ques
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(QuesActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(App);
