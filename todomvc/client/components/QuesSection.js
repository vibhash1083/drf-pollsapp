import React, { PropTypes, Component } from 'react';

export default class QuesSection extends Component {


  render() {
    const { ques, actions } = this.props;
    console.log('in ListSection',this.props);
    if (this.props.ques);
            {
                var questions = this.props.ques.map(function(ques,i){return <li> {ques.question}</li>})
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