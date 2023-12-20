import React,{useState} from 'react';
import Childcompo from './Childcompo';

const Usecallback = () => {
    const[count,setcount] = useState (0)
    const[item,setitem] = useState (10)

    
    return ( 
        <>
        <h1>Usecallback</h1>
        <h2>{count}</h2>
        <h2>{item}</h2>
        <Childcompo/>
        <button onClick={()=>setcount(count + 1)}>updatecount</button>
        <button onClick={()=>setitem(item + 5)}>updateitem</button>
        </>
     );
}
 
export default Usecallback;