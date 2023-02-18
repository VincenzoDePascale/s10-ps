import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const Dispatch = useDispatch();
  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Yt</Navbar.Brand>

          <Link to="/">Home</Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="#action1">Home</Nav.Link> */}
              <NavDropdown title="YourTown" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Rome</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Naples</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Milan</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form
              className="d-flex"
              onSubmit={(e) => {
                e.preventDefault();
                Dispatch({ type: "PLACE", payload: e.target[0].value });
                console.log("tua madre", e.target[0].value);
              }}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
