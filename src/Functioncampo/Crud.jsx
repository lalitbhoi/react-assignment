import React, { useState } from 'react';
import "./Crud.css"
const Crud = () => {
    const [name, setName] = useState("")
    const [alldata, setAlldata] = useState([])
    const [show, setShow] = useState(false)
    const [edittext , setEdittext] = useState()


    const Adddata = () => {
        console.log("adddata");
        console.log(name);
        if (name.length !== 0) {
            setAlldata((newdata) => [...newdata, name])
            setName("")
        }
    }

    const datadelet = (index) => {
        console.log("datadelet", index);
        alldata.splice(index, 1)
        setAlldata([...alldata])
    }
    console.log(alldata);

    const editdata = (index) => {
        console.log("editdata", index);
        setName(alldata[index])
        setShow(true)
        setEdittext(index)
    }
    const Update = () => {
        console.log("update" , edittext);
        alldata.splice(edittext,1,name)
        setAlldata([...alldata])
        setName('')
        setShow(false)
    }
    return (
        <>
            <h1>Crud</h1>
            <div className='input-fl'>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                {!show ? <button onClick={Adddata}>Adddata</button> :
                    <button onClick={Update}>Updatedata</button>}
            </div>
            {
                alldata.map((val, i) =>
                    <div className='btn-fl'>
                        <h1>{val}</h1>
                        {/* <h1>{i}</h1> */}
                        <button className='edit' onClick={() => editdata(i)}>edit</button>
                        <button className='delet' onClick={() => datadelet(i)}>delet</button>
                    </div>
                )
            }
            
<div className="lalit">
    <table className='f-l' value = {name} onChange={(e)=> setName(e.target.value)}>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
        </tr>
        <tr>
            <td>Lalit</td>
            <td>26</td>
            <td>Male</td>
            <button>edit</button>
            <button>delete</button>

        </tr>
        <tr>
            <td>DENISH</td>
            <td>19</td>
            <td>Male</td>
            <button>edit</button>
            <button>delete</button>
        </tr>
        <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
            <button>edit</button>
            <button>delete</button>
        </tr>
    </table>
</div>
            <br />
            <br />
        </>
    );
}

export default Crud;