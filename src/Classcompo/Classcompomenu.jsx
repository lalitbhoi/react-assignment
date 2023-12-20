import React, { Component } from 'react';

import { Link, Outlet } from 'react-router-dom';

class Classcompomenu extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <ul>
                {/* <li><Link to="Classcompointro">Classcompointro</Link></li> */}
                <li><Link to="classcampodemo">classcampodemo</Link></li>
                <li><Link to="Classcampoprops">Classcampoprops</Link></li>
                <li><Link to="Maincard">Maincard</Link></li>
                <li><Link to="Classcompostate">Classcompostate</Link></li>
                <li><Link to="Conditionalrendering">Conditionalrendering</Link></li>
                <li><Link to="Uncontrolldcomponent">Uncontrolldcomponent</Link></li>
                <li><Link to="Controlldcomponent">Controlldcomponent</Link></li>
                <li><Link to="Listsandkeys">Listsandkeys</Link></li>
                <li><Link to="Classcompositionandinheriteance">Classcompositionandinheriteance</Link></li>
                <li><Link to="Maincounter">Maincounter</Link></li>
        

            </ul>
            <Outlet></Outlet>
            </>
        );
    }
}
 
export default Classcompomenu;