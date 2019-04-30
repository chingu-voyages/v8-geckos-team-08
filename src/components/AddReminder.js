import React, { Component } from 'react';

class AddReminder extends Component{
    constructor (){
        super()
        this.state = {
            adding: false,
            title: "",
            type: "cycle", 
            time: "15"
        }
        this.toggleForm = this.toggleForm.bind(this)
    }

    toggleForm(){
        this.setState(previousState => ({
            adding: !previousState.adding
        }))
    }

    // keeps track of input changes and stores them in state, to submit later
    handleChange = (e, key) => {
        // console.log(key, e.target.value)
        this.setState({ [key]: e.target.value })
    }

    // 1. on form submit, if no title, prompts user to add one (can make pretty pop up later)
    // 2. takes the title, type, and time from state and submits it to App
    // so the data can be passed onto the next component
    // 3. closes the input form and resets the state for the next time it is opened
    handleFormSubmit = (e) => {
        e.preventDefault();
        const { title, type, time } = this.state;
        // console.log(title, type, time);
        if (title.length === 0) {
            alert('Please enter a timer title!');
            
        } else {
            this.props.addNewTimer(title, type, time);
            this.toggleForm()
            this.setState({
                title: "",
                type: "cycle", 
                time: "15"
            }) 
        }
    }

    render(){
        let displayToggle = (this.state.adding) ? "block" : "none"
        let positionToggle = (this.state.adding) ? "absolute" : "none"
        let displayText = (this.state.adding)? "Close" : "Add Reminder"
        return(
            <div className="reminder_set">
                <button className="reminder_button reminder_add" onClick={this.toggleForm}>{displayText}</button>
                <form 
                    className="reminder_form" 
                    style={{"display": displayToggle, 
                            "position": positionToggle, 
                            "top": 100, 
                            "backgroundColor": "#d8d8d8",
                            "width": "100%",
                        }}
                >
                    <p> Reminder Title: 
                        <input 
                            type="text" 
                            placeholder="Reminder Title"
                            onChange={(event) => this.handleChange(event, 'title')}
                            value={this.state.title}
                        >
                        </input>
                    </p>
                    <p> Reminder Type: 
                        <select 
                            name="reminder_type" 
                            onChange={(event) => this.handleChange(event, 'type')}
                            value={this.state.type}
                        >
                            <option value="cycle">Cycled</option>
                            <option value="once">Once</option>
                        </select>
                    </p>
                    <p> Select time: 
                        <select 
                            name="reminder_type"
                            onChange={(event) => this.handleChange(event, 'time')}
                            value={this.state.time}
                        >
                            <option value="1">1</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                        </select>
                        min
                    </p>
                    <button onClick={this.handleFormSubmit} className="reminder_button reminder_save">Save</button>
                </form>
            </div>
        )
    }
}

export default AddReminder