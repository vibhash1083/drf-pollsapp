import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class QuesTextInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      question: this.props.question,
      answer: this.props.answer
    };
  }

  render() {
    return (
        <div className="list-group-item">
                <form>
                    <div className="form-group">
                        <label htmlFor="questionTitle">Question:</label>
                        <input
                            name="questionTitle"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="questionAnswer">Answer:</label>
                        <input
                            name="questionAnswer"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    );
  }
}

export default QuesTextInput;