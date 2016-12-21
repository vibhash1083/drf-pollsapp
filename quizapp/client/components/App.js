import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
import classnames from 'classnames';

import Questions from '../components/Questions';

import * as QuesActions from '../actions/QuesActions';

class App extends Component {

  componentDidMount()
  {
        this.props.actions.getQues();
        this.props.actions.getChoices();

  }


  render()
  {
    const { ques, actions } = this.props;

    return (
      <div>
        <h3>Questions List</h3>
        {this.props.ques.map((question, i) => <Questions {...this.props}
                    key={i} i={i} question={question}/>)}
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
