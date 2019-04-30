import React, { Component } from 'react';

export default class TimerTileComponent extends Component {

	componentDidMount = () => {
		this.countdown(this.props.time * 60);
	}

	 countdown = (seconds) => {
		 let timerId, timerTitle;
		 if (this.props) {
			timerId = this.props.id;
			timerTitle = this.props.title;
		 }
		seconds = parseInt(sessionStorage.getItem(`${timerId}-seconds`))||seconds;

		function tick() {
			seconds--;
			sessionStorage.setItem(`${timerId}-seconds`, seconds)
			let counter = document.getElementById(`${timerId}-timer`);
			let current_minutes = parseInt(seconds/60);
			let current_seconds = seconds % 60;
			if (counter) {
				counter.innerHTML = current_minutes + ":" + (current_seconds < 10 ? "0" : "") + current_seconds;
			}

			if( seconds > 0 ) {
				setTimeout(tick, 1000);
			}
		}
		tick();
	}

	render() {
		const { title, type, time, id } = this.props;

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
				<div className='timer-countdown'>
				<div id={`${id}-timer`}>{time}:00</div>
				</div>
			</div>
		)
	}
}
