import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Memo from './Memo';
import AddForm from './AddForm';
import FindForm from './FindForm';
import DelForm from './DelForm';

// Appコンポーネント
class App extends Component {
  td = {
    width: "250px"
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Memo</h1>
        <AddForm />
        <hr />
        <table>
          <tbody>
            <tr>
              <td style={this.td}><FindForm /></td>
              <td style={this.td}><DelForm /></td>
            </tr>
          </tbody>
        </table>
        <Memo />
      </div>
    )
  }
}
export default App;
