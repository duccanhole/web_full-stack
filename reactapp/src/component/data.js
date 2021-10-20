import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Data() {
    const [person, setPerson] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/data')
           .then(res=>setPerson(res.data))
           .catch(err=>alert(err))
    })
    const dOne= (id)=>{
        if(window.confirm('Delete ?')){
            axios.delete('http://localhost:8080/data/delete/'+id)
               .then(res=>alert(res.data))
               .catch(err=>alert(err));
        }
    }
    const dAll= (id)=>{
        if(window.confirm('Cant restore data after clear. Are you sure? ')){
            axios.delete('http://localhost:8080/data/deleteall')
                .then(res=>alert(res.data))
                .catch(err=>alert(err))
        }
    }
    return (
        <div className="container mt-3">
            <h1>View Data</h1>
            <button onClick={dAll}>Clear all</button>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Grade</th>
                        <th scope="col">ID</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {person.length === 0 ? <h3>No Data ..</h3> :
                        person.map((el, idx) =>
                            <tr>
                                <th scope="row">{idx+1}</th>
                                <td>{el.name}</td>
                                <td>{el.age}</td>
                                <td>{el.grade}</td>
                                <td>{el._id}</td>
                                <td>
                                    <Link to={'/edit/'+el._id} className="btn btn-info">Edit</Link>
                                    <button onClick={()=>dOne(el._id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Data;