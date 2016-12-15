import React, { PropTypes, Component } from 'react';

import {connect} from 'react-redux';

import {Link} from 'react-router';


export default class QuesSection extends Component {


  render() {
    const { ques, actions } = this.props;
    console.log('in ListSection',this.props);

    if (this.props.ques)
    {
                var output = this.props.ques.map(function(ques,i){return <li> {ques.question}</li>}) || 'Nothing'
    }

    return (
              <div className='ListSection'>
              <h3>Questions</h3>
                <ul>
                    {output}
                </ul>

                <Link to={"quiz/i+1"}>Next Question</Link>
                <br/><br/>
                <Link to={"/"}>Admin Mode</Link>
              </div>
            );
    }
}