import React, {Component} from 'react';
import pic from '../images/schlapper.jpg';
import {connect} from 'react-redux';


export class Landing extends Component {
    // state = {
    //     quotes: []
    // };

    componentDidMount() {
        console.log("componentDidMount")
        //this.props.getQuotes();
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if(nextProps.quotes) {
            return { ...prevState.state, quotes: nextProps.quotes}
        }
    }

    buttonClick = () => {
        this.props.createQuote();
    }

    getQuotes = () => {
        this.props.getQuotes();
    }

    render() {

        let perps = this.props;
        let trt = this.state;

        return (
            <div>
                {/* <img id="fullBand" src={pic} height='100px' className="bg-image" /> */}
                <button onClick={this.buttonClick}>Click Me</button>
                <p>Quote Count: {this.props.quotes ? "Yeah" : "Nada"}</p>
                <button onClick={this.getQuotes}>Get Quotes</button>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    // quotes: state.quotes
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

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps    
// )(Landing);