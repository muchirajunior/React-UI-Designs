import React from 'react';
import Home from '../Components/home';
import Login from '../Components/login';
import Register from '../Components/register';

function Component({name}) {
    switch (name) {
        case "home": return < Home />
        case "login": return < Login />
        case "register": return < Register />  
    
        default: return <Home />
    }
}

export default Component;