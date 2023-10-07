import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../Assets/Icons/logo.png";
import "./Navbar.css"; // importing external css file

function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" width={142} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex gap-5 marginleft ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#AboutUs">About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#services">
                Food Stuff Trading
              </NavDropdown.Item>
              <NavDropdown.Item href="#services">
                Building Material
              </NavDropdown.Item>
              <NavDropdown.Item href="#services">
                Import and Export
              </NavDropdown.Item>
              <NavDropdown.Item href="#services">
                General Contracting
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#careers">Careers</Nav.Link>
            <Nav.Link href="#contactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
