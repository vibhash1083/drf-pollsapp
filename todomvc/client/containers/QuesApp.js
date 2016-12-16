import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
import classnames from 'classnames';

import QuesSection from '../components/QuesSection';
import QuestionsHandler from '../components/QuestionsHandler';
import * as QuesActions from '../actions/QuesActions';

class QuesApp extends Component {

  componentDidMount() {
        this.props.actions.getQues();
      }

  render() {
    const { ques, actions } = this.props;

    return (
      <div>
        <QuestionsHandler addQues={actions.addQues} />

        {this.props.ques.map((question, i) => <QuesSection {...this.props}
                    key={i} i={i} question={question}/>)}
        <Link to={"quiz/"}>Student Mode</Link>
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
