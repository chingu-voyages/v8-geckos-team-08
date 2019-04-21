import React, { Component } from 'react';
import './App.css';
import AddReminder from './AddReminder'

class App extends Component {
  render() {
    return (
      <div className="App practice-styles">
        <div className="header">Reminder App</div>
        <AddReminder />
      </div>
    );
  }
}

export default App;
