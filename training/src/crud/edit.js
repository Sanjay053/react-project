import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Employees} from "../crud/employee";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

//   var index = Employees.map(function (e) {
//     return e.Id;
//   }).indexOf(id);

  const handelSubmit = (e) => {
    e.preventDefault();

    const employeeToUpdate = Employees.filter((employee) => employee.Id === id);
    console.log(employeeToUpdate);
    if (employeeToUpdate) {
      employeeToUpdate.Name = name;
      employeeToUpdate.Age = age;
    //   console.log(employeeToUpdate.Name)
      history("/");
    } 
//     else {
//       console.log("Employees array:", Employees); // Output Employees array to console
//       console.log("ID from localStorage:", id); // Output ID from localStorage to console
//       console.error("Employee not found");
    
//   };
    // var a = Employees[index];
    // a.Name = name;
    // a.Age = age;
    
    history("/");

  }
  
  useEffect(() => {    
    setName(localStorage.getItem("Name"))
    setAge(localStorage.getItem("Age"))
    setId(localStorage.getItem("Id"))
  }, []);

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            type="text"
            required
            placeholder="Enter the Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Control
            type="text"
            required
            placeholder="Enter the Age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handelSubmit(e)} type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
