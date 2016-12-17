import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';


import Quiz from '../components/Quiz';


import * as QuesActions from '../actions/QuesActions';

class QuizApp extends Component {

  constructor(props, context) 
  {
    super(props, context);
    this.state = {
                    question: this.props.question || '',
                    answer: this.props.answer || '',
                    score: 0

                  };
  }

  render() {
            const { ques, actions } = this.props;
            const {score} = this.state.score;
    return (
      <div>
        <h3>Questions List</h3>
          {this.props.ques.map((question, i, score) => <Quiz {...this.props}
                        key={i} i={i} question={question} score={this.state.score}/>)}
        <p>Total Score: {this.state.score} </p>
      <Link to={'/'}>Creator Mode</Link>
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
