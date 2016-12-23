import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router';
import * as QuesActions from '../actions/QuesActions';


class Single extends Component {

    constructor(props){
        super(props);
        this.state = {selectedOption:0};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({selectedOption: event.target.value});    
    }

    handleSubmit(event) {
        event.preventDefault();
        const c_index = this.props.choices.findIndex(x => x.id==parseInt(this.state.selectedOption));
        console.log('c_index',c_index);
        const choice_obj = this.props.choices[c_index];
        console.log('choice_obj',choice_obj);

        this.props.actions.editChoice({
                question: choice_obj.question,
                choice_text: choice_obj.choice_text,
                id : choice_obj.id,
                votes: choice_obj.votes+1,
            })

        this.getUpdate();
    }

    getUpdate(){
        this.props.actions.getChoices();
    }

    render() {
        console.log('this.state',this.state);
        const { questions,choices, actions } = this.props;
        console.log('in Single',this.props,'question',questions,'choices',choices);
        const {id} = this.props.params;
        console.log('Index', id);
        console.log('Props', this.props);
        console.log('End Props');

        const i = questions.findIndex(x => x.id==id);
        const question_obj = questions[i];
        console.log('question_obj',question_obj);
        console.log('question_obj id',question_obj.id);
        console.log('Choice 3rd obj',this.props.choices[1].question);

        const choices_list = this.props.choices;
        console.log('choices_list',choices_list);
        const question_choice = choices.filter((option) => option.question == question_obj.id);
        console.log('question_choice',question_choice);

        return (
                  <div className='ListSection'>
                      <h2>Poll Your Choice</h2>
                        <ul><p>{question_obj.id}. {question_obj.question_text}</p></ul>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                        {question_choice.map((option,i) =>
                            <ul><label>
                            <input type='radio' key={i} name='{option.id}'
                            value={option.id} onChange={this.handleChange.bind(this)}/>
                            {option.choice_text  } Votes : {option.votes}<br/>
                            </label></ul>
                            )}

                        <input type='submit' value='Submit'/>
                        </form>
                  </div>
                );
    }
}

function mapState(state) {
  return {
        questions: state.ques,
        choices: state.choices
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(QuesActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(Single);
