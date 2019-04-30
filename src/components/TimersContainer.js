import React, { Component } from 'react';
import IndividualTimer from './TimerTileComponent';

export default class TimersContainer extends Component {
	// if timers, maps thru and renders each timer
	renderTimers = () => {
		if (this.props.timers.length > 0) {
			return (
				this.props.timers.map(timer => 
					<div className='timer-tile' key={timer.id}>
						<IndividualTimer 
							title={timer.title}
							type={timer.type}
							time={timer.time}
						/>
						<button onClick={()=>this.props.removeTimer(timer.id)}>delete me{timer.id}</button>
					</div>
				)
			)
		} else {
			return (
				<div>no timers :( :(</div>
			)
		}
	}

	render() {
		return (
			<div className='timers-container'>
				{this.renderTimers()}
			</div>
		)
	}
}