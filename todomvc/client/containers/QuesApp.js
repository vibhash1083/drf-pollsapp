import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as QuesActions from '../actions/QuesActions';

class QuesApp extends Component {

  componentDidMount() {
        this.props.actions.getQues();
      }
  render() {
    const { ques, actions } = this.props;
    console.log(ques,actions);

    return (
      <div>
        <Header addQues={actions.addQues} />
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

export default connect(mapState, mapDispatch)(QuesApp);
