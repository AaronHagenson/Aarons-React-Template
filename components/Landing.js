import React, {Component} from 'react';
import {connect} from 'react-redux';


export class Landing extends Component {

    buttonClick = () => {
        this.props.createQuote();
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
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    quotes: state.quotesReducer.quotes
});

const mapDispatchToProps = dispatch => ({
    createQuote: () => dispatch({type: 'CREATE_QUOTE', payload: {name: "Fido", quote: "Fido man!"}}),
    getQuotes: () => dispatch({type: 'GET_QUOTES'})
});
       

export const LandingComponent =  connect(
    mapStateToProps,
    mapDispatchToProps    
)(Landing);
