// Bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

// HOOKS
import { NavLink } from "react-router-dom";

// CSS
import styles from "./Navbar.css";


function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container>
        <NavLink to="/about">
          <Navbar.Brand href="#home">
            Mari & Juana
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
