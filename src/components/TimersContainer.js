import React, { Component } from 'react';
import IndividualTimer from './TimerTileComponent';
/* global chrome */

export default class TimersContainer extends Component {
	// if timers, maps thru and renders each timer
	renderTimers = () => {
		if (this.props.timers.length > 0) {
			return (
				this.props.timers.map(timer => 
					<div>
						<IndividualTimer 
							title={timer.title}
							type={timer.type}
							time={timer.time}
						/>
					</div>
				)
			)
		} else {
			return (
				<div>no timers :(</div>
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