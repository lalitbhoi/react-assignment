import React,{useReducer, useState} from 'react';

const initialstate = 0

const reducer = (state ,action)=>{
  switch(action.type){
    case "increment" : return state + 1;
    case "decrement" : return state - 1;
    case "multi" : return state * 5;
    case "reset" : return initialstate
    default : return state
  }
}
const  Usereducer= () => {

  const [count,dispatch]=useReducer(reducer,initialstate)

  return ( 
    <>
    <h1>Usereducer</h1>
    <h2>coun-{count}</h2>
    <button onClick={()=>dispatch({type:"increment"})}>+</button>
    <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    <button onClick={()=>dispatch({type:"multi"})}>*</button>
    <button onClick={()=>dispatch({type:"reset"})}>reset</button>
  
    </>
   );
}
 
export default Usereducer;
