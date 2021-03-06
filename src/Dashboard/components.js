import React from 'react';
import Home from '../Components/home';
import Inputs from '../Components/inputs';
import Login from '../Components/login';
import Spinners from '../Components/spinners';
import Buttons from '../Components/buttons';
import Card  from "../Components/card";
function Component({name}) {
    switch (name) {
        case "home": return < Home />
        case "login": return < Login />
        case "inputs": return < Inputs />  
        case "spinners": return < Spinners />
        case "buttons": return < Buttons />
        case "card": return < Card />
    
        default: return <Home />
    }
}

export default Component;