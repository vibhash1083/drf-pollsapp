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
    console.log('In App: ', this.props);

    let ques_div = <p><b>No Questions Found</b></p>;

    if(this.props.ques.length > 0)
    {
      ques_div = <div><h3>Questions List</h3>{this.props.ques.map((question, i) => <Questions {...this.props} key={i} i={i} question={question}/>)}</div>
    }

    return (
          <label>
            {ques_div}
            
          </label>
    );
  }
}

function mapState(state) {
  return {
    ques: state.ques,
    choices: state.choices
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(QuesActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(App);
