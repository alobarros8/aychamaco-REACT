import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbarjs.css";
import CartWidget from "./CartWidget";
import React from "react";
import { Link } from "react-router-dom";

function Navbarjs({ cartItems }) {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <CartWidget cartItems={cartItems} />
        <Navbar.Brand href="#home" className="fs-1">
          AyChamaco
        </Navbar.Brand>
        <Nav className="me-auto ">
          <Nav.Link href="#home"> Incio</Nav.Link>
          <Nav.Link href="#features">
            <Link to={"/BurgerShop"}>Burger shop</Link>
          </Nav.Link>
          <Nav.Link href="#pricing">
            {" "}
            <Link to={"/Formulario"}>Contacto</Link>{" "}
          </Nav.Link>
        </Nav>{" "}
      </Container>{" "}
    </Navbar>
  );
}

export default Navbarjs;
