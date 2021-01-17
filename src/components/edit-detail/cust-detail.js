import React, { Component } from 'react';
import { Nav, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft, faEdit, faEnvelopeOpenText,
    faShareSquare
} from "@fortawesome/free-solid-svg-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
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
const Style2=styled.div`
.baslık{
    color:red;
    font-family:Verdana;
    font-weigth:100;
    font-style:italic;
    font-size: 15px;
}
.deger{
    color:dark;
    font-family:verdana;
    font-style:italic;
}
`;

export default class TicketDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            lastname: '',
            email: '',
            title: '',
            description: '',
            date: new Date(),
            file: '',
        };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/customer-ticket/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    lastname: response.data.lastname,
                    email: response.data.email,
                    title: response.data.title,
                    description: response.data.description,
                    date: new Date(response.data.date),
                    file: response.data.file,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

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
                 <Nav.Item><Nav.Link href="/CustomerTicketsResponse">
                <FontAwesomeIcon icon={faEnvelopeOpenText} size="4x" />
              </Nav.Link></Nav.Item>               
              </OverlayTrigger>

                        </Nav>
                    </form>
                </Styles>
                <Row className="mb-2">
                    <Col>
                        <Link to="/CustomerHome">
                            <Button type="button" color="primary">
                                <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
                        </Link>
                    </Col>
                </Row>
                <Style2>
                <h3>Customer Ticket Detail</h3>
                <form className="container">
                    <div className="form-group">
                        <label class="baslık">Name: </label> 
                        <label className="deger">{this.state.name}</label>
                    </div>
                    <hr></hr>
                    <div className="form-group">
                        <label className="baslık">Lastname: </label>
                        <label className="deger">{this.state.lastname}</label>
                    </div><hr></hr>
                    <div className="form-group">
                        <label className="baslık">Email: </label>
                        <label className="deger">{this.state.email}</label>
                    </div><hr></hr>
                    <div className="form-group">
                        <label className="baslık">Title: </label>
                        <label className="deger">{this.state.title}</label>
                    </div><hr></hr>
                    <div className="form-group">
                        <label className="baslık">Description: </label>
                        <label className="deger">{this.state.description}</label>
                    </div><hr></hr>
                    <div className="form-group">
                        <label className="baslık">File: </label>
                        <label className="deger">{this.state.file}</label>
                    </div><hr></hr>
                    <div className="form-group">
                        <label className="baslık">Date: </label>
                        <label className="deger"> {Date(this.state.date)}</label>
                    </div>
                </form>
                </Style2>
            </div>
        )
    }
}