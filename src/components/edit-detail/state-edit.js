import React, { Component } from 'react';
import axios from 'axios';
// Linke tıklaaya baglı olarak ticket_state güncelleniyor
export default class StateEdit extends Component {
    constructor(props) {
        super(props)
    }componentDidMount() {
        axios.post('http://localhost:4000/customer-ticket/state/update/'+this.props.match.params.id)
        .then(response =>            
                console.log(response.data.ticket_state ) )
                window.location='/EmployeeHome';               
        }
    render() {
        return (
     <div></div>
        )
    }

}