import React from 'react';

// import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Functioncompomenu = () => {
    return (
        <>
        <div className='row'>
            <div className='col-6 offset-6'>
            <ul>
                <li><Link to="Functioncompointro">Functioncompointro</Link></li>
                <li><Link to="Functioncompoprops">Functioncompoprops</Link></li>
                <li><Link to=" Usestate"> Usestate</Link></li>
                <li><Link to=" Useeffect"> Useeffect</Link></li>
                <li><Link to=" User"> User</Link></li>
                <li><Link to=" Layouteffect"> Layouteffect</Link></li>
                <li><Link to=" Usememo"> Usememo</Link></li>
                <li><Link to=" Usecallback"> Usecallback</Link></li>
                <li><Link to=" Usecontext"> Usecontext</Link></li>
                <li><Link to=" Usecontextmain"> Usecontextmain</Link></li>
                <li><Link to=" Usereducer"> Usereducer</Link></li>
                <li><Link to=" Api"> Api</Link></li>
                <li><Link to=" Apipost"> Apipost</Link></li>
                <li><Link to=" Crud"> Crud</Link></li>
                <li><Link to=" Costamcrud"> Costamcrud</Link></li>
               

             
            </ul>
            <Outlet></Outlet>
            </div>
        </div>
        </>
    );
}

export default Functioncompomenu;