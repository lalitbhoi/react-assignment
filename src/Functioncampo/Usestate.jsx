import React from 'react';
import { useState } from 'react';

const  Usestate = () => {
    const [count, setcount] = useState(15)
    // update =()=>{
    //     console.log("update");
    // }
    function update(){
        console.log("update");
        setcount(count + 1)
    }
    return (  
        <>
        <h1>lalit-rajbhoi</h1>
        <h2>{count}</h2>
        <button onClick={update}>update</button>
        </>
    );
}
 
export default  Usestate;