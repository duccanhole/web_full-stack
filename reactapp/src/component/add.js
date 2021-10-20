import React, { useState } from "react";
import axios from 'axios';

function Add() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [grade, setGrade] = useState('');
    const SubmitForm = (e)=>{
        e.preventDefault();
        if(grade===''){
            alert('You have not set grade yet.')
            return;
        }
        let p = {
            name: name,
            age: age,
            grade: grade,
        }
        axios.post('http://localhost:8080/add',p)
           .then(res=>alert(res.data))
           .catch(err=>alert(err));
    }
    return (
        <div className="container mt-3">
            <h1>Add person to data</h1>
            <form onSubmit={SubmitForm}>
                <div class="mb-3">
                    <label>Name: {name}</label>
                    <input type="text" class="form-control"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label>Age: {age}</label>
                    <input type="number" class="form-control" min="1" max="50"
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label>Grade: {grade}</label>
                    <select class="form-select" onChange={(e)=>setGrade(e.target.value)} >
                        <option disabled>Please select</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}
export default Add;