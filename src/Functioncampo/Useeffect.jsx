import React, { useEffect, useState} from 'react';
import User from './User';

// import { useEffect } from 'react';

const Useeffect = () => {
    const[count,setcount] = useState(0)
    const[data,setdata] = useState(0)

    useEffect (()=>{
        // alert("called useeffect")
        console.log("called useeffect");
    })
    // useEffect (()=>{
        // alert("called useeffect2")
        // console.log("called useeffect");
    // })

    return (  
        <>
        <h1>useEffect</h1>
        {/* <h2>{count}</h2> */}
        {/* <h3>{data}</h3> */}
        <User count={count}data={data}/>
        <button onClick={()=> setcount(count + 2)}>update count</button>
        <button onClick={()=> setdata(data + 8)}>update count</button>
        </>
     );
}
 
export default Useeffect;
