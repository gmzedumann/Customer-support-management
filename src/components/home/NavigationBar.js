
import React from 'react';
import { Nav, Navbar,Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 2.0em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  // navbar gezinme çubugu oluşturulan yer 
  //link ile baglantı yönlendirmeleri yapılıyor 
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"><FontAwesomeIcon icon={faHome} size="2x" /></Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Button type="button" href="/CustomerHome" variant="success" >Customer</Button>
        &nbsp;  &emsp; &nbsp;  &emsp;&nbsp;  &emsp;
        <Button type="button" href="/EmployeeHome" variant="success" >Employee</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    )

