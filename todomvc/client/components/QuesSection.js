import React, { PropTypes, Component } from 'react';

export default class QuesSection extends Component {


  render() {
    const { question, i ,actions } = this.props;

    console.log(question,actions);

    return (
              <div className='ListSection'>
                <ul><p>{i+1} {question.question}</p></ul>
              </div>
            );
    }
}