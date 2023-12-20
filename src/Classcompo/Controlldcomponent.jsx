import React from 'react';
import { Component } from 'react';

class Controlldcomponent extends Component {

    constructor(){
        super()
        this.state = {
            name : "data"
        }
    }
    
    
    submit=(event)=>{
        event.preventDefault()
        console.log("submit")
        console.log(this.state.name);

    }

    render() { 
        return (
            <>
            <form onSubmit={this.submit}>
            <input value={this.state.name} onChange={(event)=>this.setState({name : event.target.value})} type="text"></input>
            <input type="submit" value="submit"></input>
            </form>
        </>
        );
    }
}
 
export default Controlldcomponent;