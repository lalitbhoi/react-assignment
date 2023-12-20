import React from 'react';
import { memo } from 'react';

const Childcompo = () => {

    console.log("Childcompo");
    return ( 
        <>
        {/* <h1>Childcompo</h1> */}

        </>
     );
}
 
export default memo(Childcompo);