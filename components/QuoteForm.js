import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class QuoteForm extends Component {
    state = { 
        name: '',
        quote: ''
    };

    handleNameChange = (e) => {
        this.setState({name: e.target.value});
        e.preventDefault();
        // this.props.handleNameChange(e);
    }

    handleQuoteChange = (e) => {
        this.setState({quote: e.target.value});
        e.preventDefault();
    }

    handleSubmit = () => console.log("handling submit");

    render() {
        return (
            <div className="form-group">
                <label htmlFor="quoteName">Name: </label>
                <input 
                id="quoteName" 
                type="text" 
                onChange={this.handleNameChange}
                value={this.props.name}
                />

                <label htmlFor="quote">Quote: </label>
                <input 
                id="quote" 
                type="text" 
                value={this.props.quote}
                onChange={this.handleQuoteChange}
                />

                <button 
                type="button" 
                onClick={() => {this.props.onClick(this.state.name, this.state.quote)}}
                >
                Save
                </button>
            </div>
        )
    }
}