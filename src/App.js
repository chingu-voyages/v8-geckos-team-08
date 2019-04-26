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
			chrome.storage.sync.get(['timers', 'idCounter'], (items) => {
        alert('timers retrieved!');
        if (items.idCounter) {
          this.setState({
            timers: items.timers.map(timer => timer),
            idCounter: items.idCounter
          })
        } else {
          this.setState({
            timers: items.timers.map(timer => timer),
          })
        }
			});
		}
  }

  // addNewTimer is called in & gets its data from AddReminder, 
  // it adds timers to the App state & chrome.storage,  
  // then timers are passed on to TimersContainer to render
  // chrome.storage is used for actual extension, using this.state.timers to style in localhost
  addNewTimer = (title, type, time) => {
    let id = this.state.idCounter !== 1 ? this.state.idCounter : 1
    let newTimer = {
      'id': id,
      'title': title, 
      'type': type,
      'time': time,
    }

    this.setState({
      timers: [...this.state.timers, newTimer],
      idCounter: this.state.idCounter + 1,
    })

    if (chrome.storage) {
      chrome.storage.sync.set({
        'timers': [...this.state.timers, newTimer],
        'idCounter': id
      }, () => {
        alert('timer saved!to chrome storage' );
      });
    } else {
      alert('timer not saved to chrome storage');
    }
  }

  //removes entire individual timer from the list of timers
  removeTimer = (id) => {
    const { timers } = this.state;
    let updatedTimers = timers.filter(timer => timer.id !== id);
    if (chrome.storage) {
      chrome.storage.sync.set({'timers': updatedTimers}, () => {
        alert('timers updated!to chrome storage' );
      })
    } 
    this.setState({
      timers: updatedTimers
    })
  }

  render() {
    return (
      <div className="App practice-styles">
        <div className="header">Reminder App</div>
        <AddReminder addNewTimer={this.addNewTimer} />
        <TimersContainer timers={this.state.timers} removeTimer={this.removeTimer} />
      </div>
    );
  }
}

export default App;