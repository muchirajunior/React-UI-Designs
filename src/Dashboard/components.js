import React from 'react';
import Home from '../Components/home';
import Inputs from '../Components/inputs';
import Login from '../Components/login';

function Component({name}) {
    switch (name) {
        case "home": return < Home />
        case "login": return < Login />
        case "inputs": return < Inputs />  
    
        default: return <Home />
    }
}

export default Component;