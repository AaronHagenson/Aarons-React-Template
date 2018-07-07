import React, {Component} from 'react';
import {connect} from 'react-redux';

import QuoteForm from '../components/QuoteForm';



export class Landing extends Component {

    createQuote = (name, quote) => {
        this.props.createQuote(name, quote);
    }

    getQuotes = () => {
        this.props.getQuotes();
    }

    render() {

        const rows = this.props.quotes.map((q) =>        
            <li key={q._id}>Name: {q.name}  Quote: {q.quote}</li>          
        );

        return (
            <div>
                <p>Quote Count: {this.props.quotes ? this.props.quotes.length : "Nada"}</p>
                <ul>
                    {rows}
                </ul>
                <button onClick={this.getQuotes}>Get Quotes</button>
                <QuoteForm 
                onClick={this.createQuote} 
                />
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    quotes: state.quotesReducer.quotes
});

//TODO: the syntax here isn't quite right
const mapDispatchToProps = dispatch => ({
    createQuote: (name, quote) => dispatch({type: 'CREATE_QUOTE', payload: {name, quote}}),
    getQuotes: () => dispatch({type: 'GET_QUOTES'})
});
       

export const LandingComponent =  connect(
    mapStateToProps,
    mapDispatchToProps    
)(Landing);
