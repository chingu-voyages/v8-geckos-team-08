import React, { Component } from 'react';
import './App.scss';
import AddReminder from './components/AddReminder';
import TimersContainer from './components/TimersContainer';
import './stylesheets/timerTileComponent.scss';
import './stylesheets/buttons.scss';
import './stylesheets/forms.scss';
import './stylesheets/fonts.scss';


class App extends Component {
  state = {
    timers: [],
    idCounter: 1,
  }

  componentDidMount = () => {
    let timersFromStorage = JSON.parse(localStorage.getItem("timers"));
    let counterFromStorage = JSON.parse(localStorage.getItem("counter"));

    if (timersFromStorage) {
      this.setState({
        timers: timersFromStorage,
        idCounter: counterFromStorage,
      })
    }
  }

  addNewTimer = (title, type, time) => {
    let id = this.state.idCounter !== 1 ? this.state.idCounter : 1
    let newTimer = {
      'id': id,
      'title': title,
      'type': type,
      'time': time,
    }

    const updatedTimers = [...this.state.timers, newTimer];
    const updatedCounter = this.state.idCounter + 1;

    this.setState({
      timers: updatedTimers,
      idCounter: updatedCounter,
    })

    localStorage.setItem("timers", JSON.stringify(updatedTimers));
    localStorage.setItem("counter", JSON.stringify(updatedCounter));
  }

  //removes entire individual timer from the list of timers
  removeTimer = (id) => {
    const { timers } = this.state;
    let updatedTimers = timers.filter(timer => timer.id !== id);

    this.setState({
      timers: updatedTimers
    })

    localStorage.setItem("timers", JSON.stringify(updatedTimers));
  }


  render() {
    return (
      <div className="App practice-styles">
        <div className="header">Remind Me</div>
        <AddReminder addNewTimer={this.addNewTimer} />
        <TimersContainer timers={this.state.timers} removeTimer={this.removeTimer} />
      </div>
    );
  }
}

export default App;
