import { useState } from "react";
import { Collapse, NavbarToggler, Nav, NavItem, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand } from "reactstrap";
import Logo from "../assets/MG(1).png";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header-wrapper">
      <Container>
        <Navbar sticky="top" expand="lg">
          <NavbarBrand href="/">
            <img src={Logo} alt="Logo" className="header-logo" />
          </NavbarBrand>

          <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
          <Collapse isOpen={menuOpen} navbar>
            <Nav className="ms-auto d-flex gap-5 fs-4" navbar>
              <NavItem>
                <NavLink className="header-links" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="header-links" to="/Portfolio">
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="header-links" to="/About">
                  About
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
