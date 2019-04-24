import React, { Component } from 'react';
import '../stylesheets/timerTileComponent.css';

export default class TimerTileComponent extends Component {
	render() {
		const { title, type, time } = this.props;
		return (
			<div className='timer-tile-container'>
				<div className='title'>
					{title}
				</div>
				<div className='type'>
					{type}
				</div>
				<div className='time'>
					{time}
				</div>
			</div>
		)
	}
}