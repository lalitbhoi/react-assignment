import React from "react";
import { Component } from "react";
import { createRef } from "react";

class  Uncontrolldcomponent extends Component {
    constructor(props){
        // console.log("called");
        super(props)
        this.input=createRef();
    }

    submit=(event)=>{
        event.preventDefault()
        console.log("submit")
        console.log(this.input.current.value);

    }
    
    render() { 
        return (
            <>
                <form onSubmit={this.submit}>
                <input type="text" ref={this.input}></input>
                <input type="submit" value="submit"></input>
                </form>
            </>
        );
    }
}
 
export default Uncontrolldcomponent;