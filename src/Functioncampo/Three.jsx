import React from 'react';
import { Lname } from './Usecontextmain';
import Usecontext, { Fname } from './Usecontext';
import { useContext } from 'react';

const Three = () => {
    const name = useContext(Lname)
    return (
        <>
        <h1>something user</h1>
        <h2>hii{name}</h2>
        </>
      );
}
 
export default Three;