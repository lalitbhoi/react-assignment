import React from 'react';

import { Component } from 'react';
import Listsandkeys from './Listsandkeys';
// import Listsandkeys from "../classcompo/Listsandkeys"


class Classcompositionandinheriteance extends Component {

    render() { 
        let data = "lalit"
        return (
            <>
            <h1>classcompositionandinheriteance</h1>
            <Listsandkeys name={data}/>

            </>

        );
    }
}
 
export default Classcompositionandinheriteance;