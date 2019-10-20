import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
  th = {
    fontSize: "14px",
    backgroundColor: "blue",
    color: "white"
  }
  td = {
    fontSize: "14px",
    backgroundColor: "white",
    color: "darkblue",
  }
  date = {
    fontSize: "14px",
    backgroundColor: "white",
    color: "darkblue",
  }
  render() {
    let d = this.props.value.created;
    let f = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    return (
      <tr>
        <th style={this.th}>No. {this.props.index}</th>
        <td style={this.td}>{this.props.value.message}</td>
        <td style={this.date}>{f}</td>
      </tr>
    )
  }
}

export default connect()(Item);