import { Container } from "reactstrap";
import { NavbarBrand } from "reactstrap";
import Logo from "../assets/MG(1).png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <NavbarBrand href="/">
        <Container className="d-flex justify-content-center align-items-center">
          <img className="footer-logo" src={Logo} />
        </Container>
      </NavbarBrand>
    </footer>
  );
};

export default Footer;
