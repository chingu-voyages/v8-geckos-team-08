import React, { Component } from 'react';
import IndividualTimer from './TimerTileComponent';
/* global chrome */

export default class TimersContainer extends Component {
	state = {
		timers: [],
	}

	// uses chrome storage for real chrome extension, but for styling in local host, we use the 
	// local state from App
	componentDidMount = () => {
		if (chrome.storage) {
			chrome.storage.sync.get(['timers'], function(items) {
				alert('timers retrieved!');
				console.log('didmount', items.timers.map(timer => timer))
				this.setState({
					timers: items.timers.map(timer => timer)
				})
			});
		} else {
			this.setState({
				timers: this.props.timers
			})
		}
	}

	// uses chrome storage for real chrome extension, but for styling in local host, we use the 
	// local state from App
	componentDidUpdate = (prevState, prevProps) => {
		if (chrome.storage && prevProps.timers !== this.props.timers) {
			chrome.storage.sync.get(['timers'], (items) => {
				if (prevState.timers !== items.timers) {
					this.setState({
						timers: items.timers
					})
				}
			})
		} else if (prevProps.timers !== this.props.timers) {
			this.setState({
				timers: this.props.timers
			})
		}
	}
	
	// if timers, maps thru and renders each timer
	renderTimers = () => {
		if (this.state.timers.length > 0) {
			return (
				this.state.timers.map(timer => 
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