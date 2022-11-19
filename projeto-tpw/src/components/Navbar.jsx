// Bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// HOOKS
import { NavLink } from "react-router-dom";

// CSS
import styles from "../styles/Navbar.module.css";

export default function Navbarr() {
  return (
    <Navbar className={styles.navbar} expand="lg">
      <Container>
        <NavLink to="/about">
          <Navbar.Brand href="#home">Mari & Juana</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/login">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

