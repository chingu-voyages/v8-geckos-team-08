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
		seconds = parseInt(sessionStorage.getItem(`${timerId}-seconds`)) || seconds;

		const tick = () => {
			seconds--;
			sessionStorage.setItem(`${timerId}-seconds`, seconds)
			let counter = document.getElementById(`${timerId}-timer`);
			let current_minutes = parseInt(seconds / 60);
			let current_seconds = seconds % 60;
			if (counter) {
				counter.innerHTML = current_minutes + ":" + (current_seconds < 10 ? "0" : "") + current_seconds;
			}

			if (seconds > 0){
				setTimeout(tick, 1000);
			} else {
				alert (`Don't forget: ${timerTitle}!`);
				this.props.removeTimer(timerId)
			}
		}
		tick();
	}

	render() {
		console.log(this.props.removeTimer)

		const { title, type, time, id } = this.props;

		return (
			<div className='timer-tile-container'>
				<div className='timer-information'>
					<div className='title'>{title}</div>
					<div className='details'>
						{type} / {time}
					</div>
				</div>
				<div className='timer-countdown'>
					<div id={`${id}-timer`}>{time}:00</div>
				</div>
			</div>
		)
	}
}
