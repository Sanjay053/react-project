import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Employees} from "../crud/employee";
import {v4 as uuid} from 'uuid';
import { useNavigate } from "react-router-dom";

function Create() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    let history = useNavigate();

    const handelSubmit= (e) => {
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let a= name,
        b = parseInt(age);

     Employees.push({Id:uniqueId,Name:a,Age:b});
    history('/');
    }
  return (
    <div>
      <Form className="d-grid gap-2" style={{margin:"15rem"}}>
        <Form.Group className='mb-3' controlId="formName">
        <Form.Control type="text" required placeholder="Enter the Name" onChange={(e)=>{setName(e.target.value)}}>
        </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId="formAge">
        <Form.Control type="text" required placeholder="Enter the Age" onChange={(e)=>{setAge(e.target.value)}}>
        </Form.Control>
        </Form.Group>
        <Button onClick={(e)=>handelSubmit(e)} type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Create;
