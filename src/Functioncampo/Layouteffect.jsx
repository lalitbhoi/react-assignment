import React from 'react';
import { useEffect,useLayouteffect } from 'react';

const Layouteffect = () => {

    useEffect(()=>{
        console.log("called useEffect");
    })
    useEffect(()=>{
        console.log("called Layouteffect");
    })

    return ( 
        <>
        <h1>layouteffect</h1>
        </>
     );
}
 
export default Layouteffect;