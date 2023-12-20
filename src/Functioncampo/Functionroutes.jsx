import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Functioncompomenu from './Functioncompomenu';
import Functioncompointro from './Functioncompointro';
import Functioncompoprops from './Functioncompoprops';
import Usestate from './Usestate';
import Useeffect from './Useeffect';
import User from './User';
import Layouteffect from './Layouteffect';
import Usememo from './Usememo';
import Usecallback from './Usecallback';
import Usecontext from './Usecontext';
import Usecontextmain from './Usecontextmain';
import Usereducer from './Usereducer';
import Api from './Api';
import Apipost from './Apipost';
import Crud from './Crud';
import Costamcrud from './Costamcrud';




const Functionroutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Functioncompomenu />}>
                    <Route path="Functioncompointro" element={<Functioncompointro />} />
                    <Route path="Functioncompoprops" element={<Functioncompoprops />} />
                    <Route path=" Usestate" element={< Usestate />} />
                    <Route path=" Useeffect" element={< Useeffect />} />
                    <Route path=" User" element={< User />} />
                    <Route path=" Layouteffect" element={< Layouteffect />} />
                    <Route path=" Usememo" element={< Usememo />} />
                    <Route path=" Usecallback" element={< Usecallback />} />
                    <Route path=" Usecontext" element={< Usecontext />} />
                    <Route path=" Usecontextmain" element={< Usecontextmain />} />
                    <Route path=" Usereducer" element={< Usereducer />} />
                    <Route path=" Api" element={< Api />} />
                    <Route path=" Apipost" element={< Apipost />} />
                    <Route path=" Crud" element={< Crud />} />
                    <Route path=" Costamcrud" element={< Costamcrud />} />
                  
                </Route>
            </Routes>
        </>
    );
}
export default Functionroutes;