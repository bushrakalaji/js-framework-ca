import { LinkContainer } from "react-router-bootstrap";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap/";
import { CartIcon } from "../cart";

export function Header() {
  return (
    <header>
      <Navbar bg="light" variant="light" className="px-3">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>eCommy</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact us</Nav.Link>
            </LinkContainer>
          </Nav>{" "}
          <LinkContainer to="/checkout">
            <Nav.Link>
              {" "}
              <CartIcon />
            </Nav.Link>
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  );
}
Header();
