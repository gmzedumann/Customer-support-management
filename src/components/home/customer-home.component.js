import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import Datatable from '../datatable/customer-tickettable';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText,
  faShareSquare } from "@fortawesome/free-solid-svg-icons";
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
  border: 3px ;
  padding: 10px;
  }
`;
export default class CustomerTickets extends Component {
    render() {
        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
              Tickets Status 
            </Tooltip>
          );
          const renderTooltip2 = (props) => (
            <Tooltip id="button-tooltip" {...props}>
              Employee Responds
            </Tooltip>
          );
        return (
            <div >
                <Styles>
                    <form className="form-center">
                        <Nav>
                    
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
              <Nav.Item><Nav.Link href="/CustomerHome">
              <FontAwesomeIcon icon={faShareSquare} size="4x" /></Nav.Link></Nav.Item>
              </OverlayTrigger>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip2}
              >
                 <Nav.Item><Nav.Link href="/CustomerTicketsResponse2">
                <FontAwesomeIcon icon={faEnvelopeOpenText} size="4x" />
              </Nav.Link></Nav.Item>               
              </OverlayTrigger>

                        </Nav>
                    </form>
                </Styles>
                <Datatable></Datatable>
            </div>
        )
    }
}