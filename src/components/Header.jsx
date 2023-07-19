import { useState } from "react";
import { Collapse, NavbarToggler, Nav, NavItem, Container } from "reactstrap";
import { Navbar, NavbarBrand } from "reactstrap";
import Logo from "../assets/MG(1).png";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="header-wrapper">
      <Container>
        <Navbar sticky="top" expand="lg">
          <NavbarBrand href="/">
            <img src={Logo} alt="Logo" className="header-logo" />
          </NavbarBrand>

          <NavbarToggler onClick={toggleMenu} />
          <Collapse isOpen={menuOpen} navbar>
            <Nav className="ms-auto d-flex gap-5 fs-4" navbar>
              <NavItem className="mx-auto">
                <a
                  className="header-links"
                  onClick={() => scrollToSection("about-section")}
                >
                  About
                </a>
              </NavItem>
              <NavItem className="mx-auto">
                <a
                  className="header-links"
                  onClick={() => scrollToSection("portfolio-section")}
                >
                  Portfolio
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
