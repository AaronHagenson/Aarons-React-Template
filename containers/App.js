import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';
import {LandingComponent} from '../components/Landing';

class App extends Component {

    render () {

        return (
        	<div>
                <Navbar />
                <LandingComponent />
                <Footer /> 
            </div>
        )
    }
}

export default connect(state => state)(App);
