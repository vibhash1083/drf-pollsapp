import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import QuesSection from '../components/QuesSection';

import * as QuesActions from '../actions/QuesActions';

class QuesApp extends Component {

  componentDidMount() {
        this.props.actions.getQues();
      }

  render() {
            const { ques, actions } = this.props;
            

    return (
      <div>
        <QuesSection ques={ques}/>
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
