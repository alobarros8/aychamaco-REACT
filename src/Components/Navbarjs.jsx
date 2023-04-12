import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbarjs.css";
import CartWidget from "./CartWidget";

function Navbarjs({ cartItems }) {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <CartWidget cartItems={cartItems} />
        <Navbar.Brand href="#home" className="fs-1">
          AyChamaco
        </Navbar.Brand>
        <Nav className="me-auto ">
          <Nav.Link href="#home">Incio</Nav.Link>
          <Nav.Link href="#features">Burger shop</Nav.Link>
          <Nav.Link href="#pricing">Sobre Nosotros</Nav.Link>
        </Nav>{" "}
      </Container>
    </Navbar>
  );
}

export default Navbarjs;
