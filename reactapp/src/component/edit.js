import React, { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

function Add() {
    const {id} = useParams();
    const history = useHistory();
    const [person, setPerson] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [grade, setGrade] = useState('');
    useEffect(()=>{
        axios.get('http://localhost:8080/edit/'+id)
           .then(res=>setPerson(res.data))
           .catch(err=>{
               alert(err);
           })
    })
    const SubmitForm = (e)=>{
        e.preventDefault();
        let p = {
            name: name,
            age: age,
            grade: grade,
        }
        if(p.name === '') p.name=person.name;
        if(p.age === '') p.age=person.age;
        if(p.grade === '') p.grade=person.grade;
        if(window.confirm('Change ?')){
            axios.post('http://localhost:8080/update/'+id,p)
              .then(res=>alert(res.data))
              .catch(err=>alert(err));
            history.push('/data');
        }
    }
    return (
        <div className="container mt-3">
            <h1>Edit data (id:{id})</h1>
            <form onSubmit={SubmitForm}>
                <div class="mb-3">
                    <label>Name: {name}</label>
                    <input type="text" class="form-control"
                        defaultValue={person.name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label>Age: {age}</label>
                    <input type="number" class="form-control" min="1" max="50"
                        defaultValue={person.age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-3">
                    <label>Grade: {grade}</label>
                    <select class="form-select" onChange={(e)=>setGrade(e.target.value)} >
                        <option value={person.grade}>{person.grade}</option>
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