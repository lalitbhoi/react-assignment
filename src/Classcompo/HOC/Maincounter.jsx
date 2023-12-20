import React from 'react';
import { Component } from 'react';
import Clickcountet from './Clickcountet';
import Hovercount from './Hovercount';

class  Maincounter extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Clickcountet/>
            <Hovercount/>
            </>
        );
    }
}
 
export default Maincounter ;