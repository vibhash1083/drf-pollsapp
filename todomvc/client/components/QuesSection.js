import React, { PropTypes, Component } from 'react';

export default class QuesSection extends Component {


  render() {
    const { ques, actions } = this.props;
    console.log('in ListSection',this.props);
    if (ques);
            {
                var questions = ques.map(function(ques,i){return <li> {ques.question}</li>})
            }

    return (
              <div className='ListSection'>
                <ul>
                    {questions}
                </ul>
              </div>
            );
    }
}