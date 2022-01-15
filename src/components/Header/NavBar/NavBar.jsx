import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CollegeService from "../../../services/CollegeService";
import { useEffect, useState } from "react";
import "../../MainContent/Admission/Admission.css";
const NavBar = () => {
  const [serviceLinks, setServiceLinks] = useState([]);
  useEffect(() => {
    loadCollegeServices();
  }, []);
  const loadCollegeServices = () => {
    CollegeService.allServices()
      .then((response) => {
        setServiceLinks(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar sticky="top" variant="dark" className="sp-navbar-green" expand="lg">
      <Container className="p-0">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <NavDropdown
              className="wiser-dropdown"
              title="Our College"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={NavLink} to="about-us">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {/* Services */}
            <NavDropdown
              className="wiser-dropdown"
              title="Services"
              id="basic-nav-dropdown"
            >
              {serviceLinks.map((item) => (
                <NavDropdown.Item
                  key={item.slug}
                  as={NavLink}
                  to={"service/" + item.slug}
                >
                  {item.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            {/* Departments */}
            <Nav.Link as={NavLink} to="college-departments">
              Departments
            </Nav.Link>
            <Nav.Link as={NavLink} to="nirf">
              NIRF
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gallary">
              Gallery
            </Nav.Link>
            <Nav.Link as={NavLink} to="iqac-downloads">
              IQAC
            </Nav.Link>
            <Nav.Link as={NavLink} to="admission">
              Admission
            </Nav.Link>
            <Nav.Link href="#home">e-Content</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
