import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router';
import Choices from './Choices';
import * as QuesActions from '../actions/QuesActions';

class Single extends Component {

    /*constructor(props){
        super(props);
        this.state = {
            selectedOption:'1',
            questions: this.props.questions,
            choices: this.props.choices,
        };
    };*/

    handleOptionChange(changeEvent) {
      /*  this.setState({
            selectedOption: changeEvent.target.value
            });*/
        console.log(changeEvent.target.value);
    };
    /*
    handleFormSubmit: function (formSubmitEvent) {
        formSubmitEvent.preventDefault();

        console.log('You have selected:', this.state.selectedOption);
    },
    */

    handleSubmit(e)
    {
        e.preventDefault();
    }

    render() {

        const { questions, choices, actions } = this.props;
        console.log('this.props', this.props, 'question', questions);
        const {id} = this.props.params;
        const i = questions.findIndex(x => x.id==id);
        const question_obj = questions[i];

        console.log('question_obj',question_obj);

        return (
                <div className='ListSection'>
                <h2>Poll Your Choice</h2>
                <form ref='choiceForm' onSubmit={this.handleSubmit.bind(this)}>
                  {choices.map((choice, i) => <Choices {...this.props}
                             key={i} i={i} choice={choice}/>)}
                  <br/><input type='submit'/>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    return {
      selectedOption:'1',
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
