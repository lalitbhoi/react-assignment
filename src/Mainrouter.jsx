import React, { Suspense } from 'react';
import Navbar from './Navbar';
import { createBrowserRouter } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Product from "./Product";
import Home from './Home';
import Example from './Examples';





const Classroutes = React.lazy(()=>import("./Classcompo/Classroutes"))
const Functionroutes = React.lazy(()=>import("./Functioncampo/Functionroutes"))


const Mainrouter = createBrowserRouter([

       {
        path:"/",
        element:<><Navbar/><Home/></>
    },
    {
        path:"home",
        element:<><Navbar/><Home/></>
    },  
    {
        path:"about",
        element:<><Navbar/><About/></>
    },
    {
        path:"contact",
        element:<><Navbar/><Contact/></>
    },
    {
        path:"product",
        element:<><Navbar/><Product/></>
    },
    {
        path:"/example",
        element:<><Navbar/><Example/></>,
        children:[
           {
                path:"Classcompo/*",
                element : <Suspense fallback={<h2>loddind...</h2>}><Classroutes/></Suspense>
           },
           {
            path:"Functioncompo/*",
            element : <Suspense fallback={<h2>loddind...</h2>}><Functionroutes/></Suspense>
           }
        ]
    }



])


export default Mainrouter;

