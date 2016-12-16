import React, { PropTypes, Component } from 'react';

import {connect} from 'react-redux';
import classnames from 'classnames';



export default class QuesSection extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
    console.log('this.state',this.state);
  }



  handleDelete(e){
    e.preventDefault();
    console.log('clicked');
    const id = this.props.question.id;
    console.log(this.props.actions,id);
    this.props.actions.deleteQues(id);


  }

  handleEdit(e){
    e.preventDefault();
    this.setState({ editing: true });
    console.log('clicked',this.state);

  }
  render() {
    const { question, i ,actions } = this.props;

    console.log(question,actions);

    return (
              <div className='ListSection'>
                <ul><p>{i+1} {question.question} <button className='destroy'
                   onClick={this.handleDelete.bind(this)}>&times;</button> <button onClick=
                   {this.handleEdit.bind(this)} className='update'>Edit</button></p>

                </ul>
              </div>
            );
    }
}