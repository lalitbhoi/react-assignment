import React from 'react';
import {Fname} from "./Usecontext";

const CompoC = () => {
    return ( 
        <>
        <h1>lalit26</h1>
        <Fname.Consumer>
            {
                (data)=>{
                    return <h1>hello{data}</h1>
                }
            }
        </Fname.Consumer>
       
        </>
     );
}
 
export default CompoC;