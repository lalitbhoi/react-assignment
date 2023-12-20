import React, { createContext } from 'react';
import CompoA from './CompoA';
const Fname = createContext ()
const name = "jay"

const Usecontext = () => {
    return ( 
        <>
        <h1>Usecontext</h1> 
        <Fname.Provider value={name}>
        <CompoA/>
        </Fname.Provider>
        </>
     );
}
 
export default Usecontext;
export {Fname}


