import React, { Component } from 'react';

class AddReminder extends Component{
    constructor (){
        super()
        this.state = {adding: false}
        this.toggleForm = this.toggleForm.bind(this)
    }
    toggleForm(){
        this.setState(previousState => ({
            adding: !previousState.adding
        }))
    }
    render(){
        let displayToggle = (this.state.adding) ? "block" : "none"
        let displayText = (this.state.adding)? "Close" : "Add Reminder"
        return(
            <div className="reminder_set">
                <button className="reminder_button reminder_add" onClick={this.toggleForm}>{displayText}</button>
                <form className="reminder_form" style={{"display": displayToggle}}>
                    <p> Reminder Title: <input type="text" placeholder="Reminder Title"></input></p>
                    <p> Reminder Type: 
                        <select name="reminder_type">
                            <option value="cycle">Cycled</option>
                            <option value="once">Once</option>
                        </select>
                    </p>
                    <p> Select time:
                        <select name="reminder_type">
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                        </select>
                        min
                    </p>
                    <button className="reminder_button reminder_save">Save</button>
                </form>
            </div>
        )
    }

}

export default AddReminder
