import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


function Contact(){
   
   const name = "lalit"

    return(
    
        <>
         <navbar/>

        <h1>my name is {name}</h1>
        <h1>Contact page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cumque ab, ullam quis unde saepe culpa!</p>
        </>
    )
}

export default Contact