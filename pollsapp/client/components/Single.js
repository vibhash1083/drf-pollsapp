import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router';
import Choice from './Choice';
import * as QuesActions from '../actions/QuesActions';

class Single extends Component {

      constructor(props, context) {
                super(props, context);
                this.state = {
                            selected : -1
                };
    }

    handleSubmit(e)
    {
        e.preventDefault();
        console.log('Form Submitted in single', e);
    }

    handleOptionChange(changeEvent) {

        console.log('Option Selected', changeEvent.target.value);
        this.setState({ selected: changeEvent.target.value });
    }

    render() {

        let element = null;

        if(this.state.selected != -1)
        {
            console.log('Selected value: ', this.state.selected);
            element = this.state.selected;
        }

        const { questions, choices, actions } = this.props;
        console.log('this.props', this.props, 'question', questions);
        const {id} = this.props.params;
        const i = questions.findIndex(x => x.id==id);
        const question_obj = questions[i];

        console.log('question_obj',question_obj);

        return (
                <div className='SingleSection'>
                    <h2>Poll Your Choice</h2>
                    {question_obj.question_text}
                    <form ref='choiceForm' onSubmit={this.handleSubmit.bind(this)}>
                      {choices.map((choice, i) => <Choice {...this.props}
                                 key={i} i={i} choice={choice}/>)}  
                    </form>
                            <div className="controls">
                            <form ref='choiceForm' onSubmit={this.handleSubmit.bind(this)}>
                                {choices.map(option =>
                                    <label>
                                      <input type="radio" {...this.props} value={option.id} 
                                      name='{option.id}' onChange={this.handleOptionChange.bind(this)}/>
                                      {option.choice_text} Votes: {option.votes}<br/>
                                    </label>
                                )}
                                <input type="submit" />
                            </form>
                            </div>
                </div>               
        );
    }
}

function mapState(state) {
    return {
      questions: state.ques,
      choices: state.choices,
    };
}

function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(QuesActions, dispatch)
    };
}

export default connect(mapState, mapDispatch)(Single);