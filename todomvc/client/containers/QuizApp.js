import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import QuesSection from '../components/QuesSection';
import Quiz from '../components/Quiz';


import * as QuesActions from '../actions/QuesActions';

class QuizApp extends Component {

  componentDidMount() {
        this.props.actions.getQues();
      }

  render() {
            const { ques, actions } = this.props;


    return (
      <div>
      {this.props.ques.map((question, i) => <Quiz {...this.props}
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

export default connect(mapState, mapDispatch)(QuizApp);
