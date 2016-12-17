import React, { PropTypes, Component } from 'react';

import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router';

export default class QuesSection extends Component {

  constructor(props) {
        super(props);

        this.state = {
            editView: false,
            question: '',
            answer: '',
            id : ''

        }
    }

  handleDelete(e){
    e.preventDefault();
    console.log('clicked');
    const id = this.props.question.id;
    console.log(this.props.actions,id);
    this.props.actions.deleteQues(id);


  }
  toggleEdit() {
        this.state.editView ? this.setState({editView: false}) : this.setState({editView: true});
        console.log('in toggleEdit',this.state);
    }


  handleChange(key, e) {
        let newState = {};
        newState[key] = e.target.value;
        this.setState(newState);
        console.log('handleChange',this.state);


    }

    submitEditHandler(e) {
        e.preventDefault();
        console.log('this.props',this.props);

        this.props.actions.editQue({
            question: this.state.question,
            answer: this.state.answer,
            id : this.props.question.id


        })
        this.setState({editView: false});
    }

  render() {
    const { question, i ,actions } = this.props;


    return (
              <div className='ListSection'>
                <ul><p>{i+1} {question.question} 
                   <button className='destroy'
                   onClick={this.handleDelete.bind(this)}>
                   &times;
                   </button>
                   <button
                   onClick={this.toggleEdit.bind(this)}
                    className="btn btn-default">
                    Edit
                   </button></p>
                {this.state.editView &&
                <form onSubmit={this.submitEditHandler.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="questionTitle">Question:</label>
                        <input
                            onChange={this.handleChange.bind(this, 'question')}
                            name="question"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="questionAnswer">Answer:</label>
                        <input
                            onChange={this.handleChange.bind(this, 'answer')}
                            name="answer"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit edits</button>
                </form>}

                </ul>
              </div>
            );
    }
}