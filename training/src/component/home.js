import React, {useState} from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Employees} from "../crud/employee";
// import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Card from "react-bootstrap/Card";
// import { Container } from 'semantic-ui-react';

function Home() {


const [expandedTextIds, setExpandedTextIds] = useState([]);

  const toggleText = (id) => {
    if (expandedTextIds.includes(id)) {
      setExpandedTextIds(expandedTextIds.filter((itemId) => itemId !== id));
    } else {
      setExpandedTextIds([...expandedTextIds, id]);
    }
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const getButtonText = (id) => {
    return expandedTextIds.includes(id) ? "Show less" : "Read more";
  };

  //   let history = useNavigate();

  //   const handelEdit= (id,name,age) =>{
  //     localStorage.setItem('Id',id);
  //     localStorage.setItem('Name',name);
  //     localStorage.setItem('Age',age);
  //   };

  //   const handelDelete = (id) => {
  //     var index = Employees.map(function (e) {
  //       return e.Id;
  //     }).indexOf(id);
  //     console.log(index);
  //     Employees.splice(index, 1);
  //     history("/");
  //   };
  return (
    <>
      <div className="wrapper">
        {Employees && Employees.length > 0 ? (
          Employees.map((item) => (
            <Card className="item">
              <LazyLoadImage
                className="Card_Image p-3 img-fluid"
                alt="Card image"
                effect="blur"
                src="https://source.unsplash.com/random"
              />
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "baseline",
                  justifyContent: "flex-start",
                }}
              >
                <Card.Title>{item.product_name}</Card.Title>
                <Card.Text style={{height:"auto"}}>

                  {expandedTextIds.includes(item.Id)
                    ? item.product_description
                    : truncateText(item.product_description, 20)}
                  <Button
                    variant="link"
                    onClick={() => toggleText(item.Id)}
                  >
                    {getButtonText(item.Id)}
                  </Button>
                </Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div>no records</div>
        )}
      </div>
      
      {/* <Fragment>
              <div style={{ margin: "10rem" }}>
                  <Table striped bordered hover size="sm" bgcolor="--bs-light">
                      <thead>
                          <tr>
                              <th>Name</th>
                              <th>Age</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {Employees && Employees.length > 0 ? (
                              Employees.map((item) => (
                                  <tr key={item.Id}>
                                      <td>{item.Name}</td>
                                      <td>{item.Age}</td>
                                      <td>
                                          <Link to="edit">
                                              <Button onClick={() => handelEdit(item.Id, item.Name, item.Age)}>Edit</Button>
                                          </Link>
                                          &nbsp;
                                          <Button onClick={() => handelDelete(item.Id)}>
                                              Delete
                                          </Button>
                                      </td>
                                  </tr>
                              ))
                          ) : (
                              <tr>
                                  <td colSpan="3">No data found</td>
                              </tr>
                          )}
                      </tbody>
                  </Table>
                  <br>

                  </br>
                  <Link className="d-grid gap-2" to="add">
                      <Button size="lg"> Create</Button>
                  </Link>
              </div>
          </Fragment> */}
    </>
  );
}

export default Home;
