import React, { Component } from 'react';
import { render } from 'react-dom';
import auth from '../services/authService';

class Logout extends Component {
    componentDidMount() {
        auth.logout();
        window.location = '/';
    }
    
    render(){
        return null;
    }
}
export default Logout;