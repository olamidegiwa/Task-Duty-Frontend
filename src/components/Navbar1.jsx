import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Nav, Container, Navbar } from "react-bootstrap";

const Navbar1 = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary p-4">
      <Container>
        <Link className="text-decoration-none" to="/">
          TaskDuty
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-lg-grow-0 ">
          <Nav className="me-auto d-flex justify-content-end gap-3 ">
            {location.pathname === "/tasks" ? null : (
              <Link className="text-decoration-none" to="/tasks">
                All Task
              </Link>
            )}
            {location.pathname === "/new" ? null : (
              <Link className="text-decoration-none" to="/new">
                New Task
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
