import React from 'react';

import { Component } from 'react';

class Clickcountet  extends Component {
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
            <button onClick={this.increment}>Update</button>
            </>
        );
    }
}
 
export default  Clickcountet;