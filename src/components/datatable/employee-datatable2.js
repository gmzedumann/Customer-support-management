import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
const Tickets = props => (
    <tr>
        <td>{props.ticket.customer_name}</td>
        <td>{props.ticket.customer_lastname}</td>
        <td>{props.ticket.name}</td>
        <td>{props.ticket.lastname}</td>
        <td>{props.ticket.email}</td>
        <td>{props.ticket.title}</td>
        <td>{props.ticket.description}</td>
        <td>{props.ticket.file}</td>
        <td>{props.ticket.date}</td>
        <td>
            <Link to={"/employeeTicket-detail2/" + props.ticket._id}>
                <Button color="primary" className="mr-2">
                    <FontAwesomeIcon icon={faInfo} /> Detail
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
            search: ''
        };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/employee-ticket/')
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
                    ticket.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                    ;
            }
        );
        return (
            <div>
                <div className="col-lg-3 mt-2 mb-2">
                    <input className="form-control"
                        type="search"
                        placeholder="Name and Title Search..."
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)}
                    >
                    </input>
                </div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Customer Name</th>
                            <th>Customer Lastname</th>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>File</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredContacts.map(ticket => {
                                return < Tickets ticket={ticket} key={ticket._id} />;
                            })
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}