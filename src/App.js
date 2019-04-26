import React, { Component } from 'react';
import './App.css';
import AddReminder from './components/AddReminder';
import TimersContainer from './components/TimersContainer';
/* global chrome */

class App extends Component {
  state = {
    timers: [],
    idCounter: 1,
  }

  componentDidMount = () => {
		if (chrome.storage) {
			chrome.storage.sync.get(['timers'], (items) => {
				alert('timers retrieved!');
				this.setState({
					timers: items.timers.map(timer => timer)
				})
			});
		}
  }

  // addNewTimer is called in & gets its data from AddReminder, adds timers to the App state & chrome.storage,  
  // then passes on timers to TimersContainer to render
  // chrome.storage is used for actual extension, using this.state.timers to style in localhost
  addNewTimer = (title, type, time) => {
    let newTimer = {
      'id': this.state.idCounter,
      'title': title, 
      'type': type,
      'time': time,
    }
    this.setState({
      timers: [...this.state.timers, newTimer],
      idCounter: this.state.idCounter + 1,
    })

    if (chrome.storage) {
      chrome.storage.sync.set({'timers': [...this.state.timers, newTimer]}, () => {
        alert('timer saved!to chrome storage' );
      });
    } else {
      alert('timer not saved to chrome storage');
    }
  }

  render() {
    console.log(this.state.timers)
    return (
      <div className="App practice-styles">
        <div className="header">Reminder App</div>
        <AddReminder addNewTimer={this.addNewTimer} />
        <TimersContainer timers={this.state.timers} />
      </div>
    );
  }
}

export default App;
