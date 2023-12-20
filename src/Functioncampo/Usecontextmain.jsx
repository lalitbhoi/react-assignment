import React, { createContext } from 'react';
import One from './One';

const Lname = createContext ()

const Usecontextmain = () => {
    return ( 
        <>
        <h1>Usecontextmain</h1>
        <Lname.Provider value="rajmali">
        <One/>
        </Lname.Provider>
        </>
     );
}
 
export default Usecontextmain;
export {Lname}