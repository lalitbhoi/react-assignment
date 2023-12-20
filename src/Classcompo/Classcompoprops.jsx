import React, { Component } from 'react';


import Classcompointro from './Classcompointro';
import Classcampodemo from './Classcompodemo';


 class Classcampoprops extends Component {
    render() { 

      // let name ="lalit"
      let user ={
        name : "lalit",
        age : "26",
        location : "rajeshthan"
      }

       return (
          <>
            <h1>my props</h1>
               <Classcompointro user={user}/>
               <Classcampodemo/>
          </> 
            );
 }
}
 export default Classcampoprops;