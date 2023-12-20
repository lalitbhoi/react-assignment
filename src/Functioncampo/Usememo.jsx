// import React, {Usestate} from 'react';

// const Usememo = () => {
//     // const[count, setcount] = Usestate (0)
//     const [count, setcount] = Usestate (0)
//     return ( 
//         <>
//         <h1>Usememo</h1>
//         <h2>{count}</h2>
//         <button onClick={() =>setcount(count + 1)}>updatecount</button>
//         </>
//      );
// }
 
// export default Usememo;
import React, {useState} from 'react';
import Usestate from './Usestate';



const Usememo = () => {

    const[count,setcount] = useState (0)
    const[item,setitem] = useState (0)
    function multicount(){
        console.log("multicount");
        return item*5
    }
    
    return ( 
        <>
        <h1>usememo</h1>
        <h2>{count}count</h2>
        <h2>{item}item</h2>
        <h3>{multicount()}multicount</h3>
        <button onClick={()=>setcount(count + 1)}>count-multi=call</button>
        <button onClick={()=>setitem(item + 5)}>item</button>
        </>
     );
}
 
export default Usememo;

