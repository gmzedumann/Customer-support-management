import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft ,faEdit,faEnvelopeOpenText,
  faShareSquare} from "@fortawesome/free-solid-svg-icons";
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
export default class UpdateTicket extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);// degiştirilmemiş title buna eşittir
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);  
    this.onChangeDate = this.onChangeDate.bind(this); 
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        name:'',
        lastname:'',
        email:'',
        title:'',
        description:'',
        date:new Date(),
        file:'' ,

    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/customer-ticket/'+this.props.match.params.id)
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

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeDate(date) {
    this.setState({
      date: date
    })
  }
  onChangeFile(e) {
    this.setState({
      file: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const ticket = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      file: this.state.file,
      ticket_state:this.state.ticket_state
    }
    console.log(ticket);
    axios.post('http://localhost:4000/customer-ticket/update/' + this.props.match.params.id, ticket)
      .then(res => console.log(res.data));
    window.location='/EmployeeHome';
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
    <div>
      <Styles>
                 <form class="form-center">
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
                    </form>
                </Styles>
                <Row className="mb-2">
      <Col>
        <Link to="/EmployeeHome">
          <Button type="button" color="primary">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Link>
      </Col>
    </Row>
      <h3>Edit Customer Ticket</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
        <div className="form-group"> 
          <label>Lastname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangeLastname}
              />
        </div>
        <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group"> 
          <label>Title: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>
        <div className="form-group">
                <label>Description: </label>
                <textarea rows="5" type="text"
                  required
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                />
              </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>
        <div className="form-group">
                <input type="file"
                  className="form-control-file-border"              
                  onChange={this.onChangeFile}
                />
              </div>  
            
        <div className="form-group">
        <Button type="button" color="success">
            <FontAwesomeIcon icon={faEdit} /> Edit Customer Ticket
          </Button>
        </div>
      </form>
    </div>
    )
  }
}