import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMemo } from './Store';

class AddForm extends Component {
  input = {
    fontSize: "16px",
    color: "#006",
  }
  btn = {
    fontSize: "14px",
    color: "#006",
  }
  message = {
    fontSize: "16px",
    color: "#006"
  }

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  doAction(e) {
    e.preventDefault();
    let action = addMemo(this.state.message);
    this.props.dispatch(action);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <p style={this.message}>{this.props.message}</p>
        <form onSubmit={this.doAction}>
          <input type="text" size="40" onChange={this.doChange}
            style={this.input} value={this.state.message} required />
          <input type="submit" sytle={this.btn} value="Add"/>
        </form>
      </div>
    );
  }
}

export default connect((state) => state)(AddForm);