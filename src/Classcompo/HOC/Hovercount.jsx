import React from 'react';

import { Component } from 'react';

class Hovercount extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    increment = ()=>{
        this.setState({count : this.state.count + 1})
    }
    render() { 
        return (
            <>
            <h1>{this.state.count}</h1>
            <button onMouseEnter={this.increment}>Update</button>
            </>
        );
    }
}
 
export default Hovercount;