import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "./header.css";

const NavBar = () => {
  return (
  
      <Container>
        <Navbar bg="white" expand="lg">
          <Navbar.Brand href="#">
            <img src="./images/logo.png" alt="" />
          </Navbar.Brand>
          <Form className="searchbox">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
          </Form>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Browse Theme</Nav.Link>
              <Nav.Link href="#action2">Premium</Nav.Link>
              <Nav.Link href="#action3">Freebies</Nav.Link>
              <Nav.Link href="#action4">Sign in</Nav.Link>
              <Nav.Link href="#action5">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      );
};

export default NavBar;
