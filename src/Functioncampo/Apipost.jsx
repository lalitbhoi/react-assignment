import React, { useEffect, useState } from 'react';
import Useeffect from './Useeffect';


const Apipost = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [userdata,setUserdata] = useState([])
    Useeffect(()=>{
        fetch(" http://localhost:5000/user").then((result)=>{
            console.log(result);
            result.json().then((resp)=>{
                console.log(resp);
                setUserdata(resp)
            })
        })
    },[])
    function submit() {
        console.log("submit");
        // console.log(name,email,password);
        let data = {name,email,password}
        console.log(data);
        fetch(" http://localhost:5000/user",{
            method : "POST",
            headers :{ "Content-type":"application/json"
        },
        body : JSON.stringify(data)
        }).then((result)=>{
            console.log(result);
            result.json().then((resp)=>{
                console.log(resp);
              
            })
        })
        setName("")
        setEmail("")
        setPassword("")
    }
  
    return ( 
        <>
        <h1>Apipost</h1>

        name : <input type="text"value={name} 
        onChange={(s)=> setName(s.target.value)} /><br />
        email : <input type="Email"value={email}
         onChange={(s)=> setEmail(s.target.value)} /><br />
        password : <input type="Password" value={password}
         onChange={(s)=> setPassword(s.target.value)} /><br />
        <button onClick={submit}>submit</button>
        <table border = "1" width= "100%">
            <tr>
                <td>id</td>
                <td>name</td>
                <td>email</td>
                <td>password</td>
                <td>number</td>
                <td>city</td>
            </tr>
            {
                userdata.map((item)=>{
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td>{item.number}</td>
                        <td>{item.city}</td>
                    </tr>
                })
            }
        </table>
        <br />
        <br />
        <br />
        <br />
        </>
     );
}
 
export default Apipost;