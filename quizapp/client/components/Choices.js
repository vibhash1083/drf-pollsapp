import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {Link} from 'react-router';
import * as QuesActions from '../actions/QuesActions';
import {history,browserHistory} from 'react-router';

class Choices extends Component {

   
    
    handleOptionChange(changeEvent) {

        console.log('Button Selected', changeEvent.target.value);
        console.log('Id: ', this.props.choice.id);
        console.log('Question: ', this.props.choice.question);
        console.log('Votes: ', this.props.choice.votes);
        console.log('Choice_text', this.props.choice.choice_text);

        this.props.actions.editChoice({
            question: this.props.choice.question,
            choice_text: this.props.choice.choice_text,
            id : this.props.choice.id,
            votes: this.props.choice.votes+1,
        })
        this.getUpdate();
    };

    getUpdate(){
        this.props.actions.getChoices();
    }

    render(){
        const {votes} = this.props.choice;
        let choice_div = null;
        if (this.props.choice.question == this.props.params.id) 
        {
            choice_div = <p><input type="radio" value={ this.props.choice.id } name={this.props.choice_text} 
            onChange={this.handleOptionChange.bind(this)}/>
                { this.props.choice.choice_text } Votes: {votes}</p>
        }

        console.log('Choices Section');
        console.log(this.props);
        return(
            <label>
            
                {choice_div}

            </label>
            );
        
    }

}

function mapState(state) {
    return {
      choices: state.choices

    };
}

function mapDispatch(dispatch) {
    return {
        actions: bindActionCreators(QuesActions, dispatch)
    };
}

export default connect(mapState, mapDispatch)(Choices);