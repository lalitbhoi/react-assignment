import React, { useState } from 'react';

const Costamcrud = () => {

    const [name , setName] = useState("")
    const [age , setAge] = useState("")
    const [password , setPassword] = useState("")

    const [alldata , setAlldata] = useState([])

    const Adddata = () =>{
        console.log("Adddata");
        console.log(name);
        setAlldata((newdeta)=>[...newdeta, name])
    }
    return ( 
        <>
        <h1>Costamcrud</h1>
        <div>
            <input type="name" value={name} onChange={(e)=> setName(e.target.value)}/><br />
            <input type="age" value={age} onChange={(e)=> setAge(e.target.value)} /><br />
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} /><br />
            <button onClick={Adddata}>Adddata</button><br />
        </div>
        <div>
            <table>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>password</th>
                </tr>
                {
                    alldata.map ((val)=>
                    <div>{val}</div>
                    )
                }
                <tr>
                    <td>ankit</td>
                    <td>25</td>
                    <td></td>
                </tr>
            </table>
        </div>
        </>
     );
}
 
export default Costamcrud;
