import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Single from '../components/Single';

import * as QuesActions from '../actions/QuesActions';

class SingleApp extends Component {

  componentDidMount() {
        this.props.actions.getQues();
      }

  render() {
            const { ques, actions } = this.props;
            const { id } = this.props.params;
            console.log(id);
            console.log("Got ID");
            const i = this.props.ques.findIndex(x => x.id==id);
            const question = this.props.ques[i]
            console.log(this.props.ques,i);

    return (
      <div>
        <Single i={i} question={question} {...this.props} />
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

export default connect(mapState, mapDispatch)(SingleApp);
