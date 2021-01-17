import React, { Component } from 'react';
import { Nav, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Datatable from "../datatable/customer-datatable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faShareSquare
} from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
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
   position: absolute;
  left: 0px;
  margin-top:0px;
  margin-left:0px;
  margin-bottom:0px;
  width:100px;
  height:100%; 
  background-color: #222;
  border: 3px 
  padding: 10px;
  
  }
`;
export default class EmployeeTickets extends Component {
  render() {
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Customer Tickets
      </Tooltip>
    );
    const renderTooltip2 = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Employee Responds
      </Tooltip>
    );
    return (
      <div className="form">
        <Styles>
          <Form className="form-center">
            <Nav>            
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                 <Nav.Item><Nav.Link href="/EmployeeHome">
                <FontAwesomeIcon icon={faEnvelopeOpenText} size="4x" />
              </Nav.Link></Nav.Item>               
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip2}
              >
              <Nav.Item><Nav.Link href="/EmployeeTickets">
              <FontAwesomeIcon icon={faShareSquare} size="4x" /></Nav.Link></Nav.Item>
              </OverlayTrigger>
            </Nav>
          </Form>
          <Datatable></Datatable>
        </Styles>
      </div>
    )
  }
}