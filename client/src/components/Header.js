import React, { Component } from "react";

import Link from "react-router-dom/Link";

// Bootstrap components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand to="/" component={Link}>
          <Link to="/" className="app-logo">
            MLTP
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/contributors" className="nav-link">
            Contributors
          </Link>
          <Link to="/contributions" className="nav-link">
            Contributions
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="secondary">Search</Button>
        </Form>
      </Navbar>
    </header>
  );
};
export default Header;
