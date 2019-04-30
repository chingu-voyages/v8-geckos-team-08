import React, { Component } from 'react';
import IndividualTimer from './TimerTileComponent';

export default class TimersContainer extends Component {

	renderTimers = () => {
		if (this.props.timers.length > 0) {
			return (
				this.props.timers.map(timer => 
					<div className='timer-tile' key={timer.id}>
						<IndividualTimer 
							title={timer.title}
							type={timer.type}
							time={timer.time}
							id={timer.id}
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