import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbars = () => {
  const [expanded, setExpanded] = useState(false);

  const closeNav = () => setExpanded(false);

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="margin-left-inherit Navbar" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/">Your Logo</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={closeNav}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/service" onClick={closeNav}>
              Service
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={closeNav}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
