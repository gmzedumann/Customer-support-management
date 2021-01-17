import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faPlus,  faEnvelopeOpenText,
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
  border: 3px 
  padding: 10px;
  
  }
`;
export default class EmployeeCreatTicket extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      customer_name:'',
      customer_lastname:'',
      name: '',
      lastname: '',
      email: '',
      title: '',
      description: '',
      file: '',
      date: new Date()
    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/customer-ticket/'+this.props.match.params.id)
        .then(response => {
            this.setState({
               customer_name: response.data.name,
                customer_lastname: response.data.lastname,
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
  onChangeFile(e) {
    this.setState({
      file: e.target.value
    })
  }
  onChangeDate(date) {
    this.setState({
      date: date
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const employeeTicket = {
      customer_name:this.state.customer_name,
      customer_lastname:this.state.customer_lastname,
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      title: this.state.title,
      description: this.state.description,
      file: this.state.file,
      date: this.state.date
    }
    console.log(employeeTicket);
    axios.post('http://localhost:4000/employee-ticket/add', employeeTicket)
      .then(res => console.log(res.data));
      window.location='/EmployeeTickets';
  }
  render() { //dönüş oluşturuluyor    
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
                    <form className="form-center">
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
          <Button  type="button" color="primary">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Link>
      </Col>
    </Row>
      <div className="container">
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <h3>Ticket Response</h3>
            <form>
            <div className="form-group">
                <label>Customer Name: </label>
                <input type="text"
                  required
                  className="form-control"
                  readOnly
                  value={this.state.customer_name }
                />
              </div>
              <div className="form-group">
                <label>Customer Lastname: </label>
                <input type="text"
                  required
                  readOnly
                  className="form-control"
                  value={this.state.customer_lastname}
                />
              </div>
              <div className="form-group">
                <label>Name: </label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label>Lastname: </label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.lastname}
                  onChange={this.onChangeLastname}
                />
              </div>
              <div className="form-group">
                <label>Email: </label>
                <input type="text"
                  required
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label>Title: </label>
                <input type="text"
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
                  value={this.state.file}
                  onChange={this.onChangeFile}
                />
              </div>
              <div className="form-group">
              <Button  onClick={this.onSubmit} type="button" color="success">
            <FontAwesomeIcon icon={faPlus} /> Create Ticket
          </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}