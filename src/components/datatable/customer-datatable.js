import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInfo,
    faEdit,
    faPlus
} from "@fortawesome/free-solid-svg-icons";

const Tickets = props => (
    <tr>
        <td>{props.ticket.name}</td>
        <td>{props.ticket.lastname}</td>
        <td>{props.ticket.email}</td>
        <td>{props.ticket.title}</td>
        <td>{props.ticket.description}</td>
        <td >{props.ticket.file }</td>
        <td>{props.ticket.date}</td>
        <td><Link to={"/state-edit/" + props.ticket._id} style={{ color: '#6e66ff' }}>{props.ticket.ticket_state} </Link></td>
        <td>
            <Link to={"/customerTicket-detail/" + props.ticket._id}>
                <Button color="primary" className="mr-2">
                    <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>
            <Link to={"/edit/" + props.ticket._id}>
                <Button color="success" className="mr-2">
                    <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>
            <Link to={"/EmployeeCreateTicket/"+props.ticket._id}>
                <Button color="info" className="mr-2">
                    <FontAwesomeIcon icon={faPlus} /> Respond
            </Button>
            </Link>
        </td>
    </tr>
)

export default class Datatable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
            search: '',         
        };    
    }
    componentDidMount() {
        axios.get('http://localhost:4000/customer-ticket/')
            .then(response => {
                this.setState({ tickets: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }
    render() {
        const filteredContacts = this.state.tickets.filter(
            (ticket) => {
                return ticket.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                    ticket.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                    ticket.ticket_state.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                    ;
            }
        );
       
        return (
            <div>
                <div className="row">
                    <div className="col-lg-3 mt-2 mb-2">
                        <input className="form-control"
                            type="search"
                            placeholder="Name,Title or State Search..."
                            value={this.state.search}
                            onChange={this.updateSearch.bind(this)}
                        >
                        </input>
                    </div>
                </div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th >File</th>
                            <th>Date</th>
                            <th> 
                               State
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //sort ile name göre sıralı şekilde geliyor 
                            filteredContacts.sort((a, b) => a.name.localeCompare(b.name)).map(ticket => {
                                return < Tickets ticket={ticket} key={ticket._id} />;
                            }) 
                        
                        }
                    </tbody>
                </table >
            </div>
        )
    }
}