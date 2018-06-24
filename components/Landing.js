import React, {Component} from 'react';
import pic from '../images/schlapper.jpg';
import {connect} from 'react-redux';


export class Landing extends Component {

    buttonClick = () => {
        this.props.sendAction();
    }

    render() {
        return (
            <div>
                {/* <img id="fullBand" src={pic} height='100px' className="bg-image" /> */}
                <button onClick={this.buttonClick}>Click Me</button>
            </div>
        )
    }
};


const mapDispatchToProps = dispatch => ({
     sendAction: () => dispatch({type: 'BUTTON_CLICKED', payload: 4})
});
       

export const LandingComponent =  connect(
    null,
    mapDispatchToProps    
)(Landing);