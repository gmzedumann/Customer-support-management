import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css" //bootstrap import edildi ön yükleme safasına 

// components dosyasındaki js dosyları import edildi 
import Home from "./components/home/Home";
import {NavigationBar} from "./components/home/NavigationBar";  // Navbar için js dosyası
import EmployeeHome from "./components/home/employee-home.component";
import CustomerHome from "./components/home/customer-home.component";
import CustomerCreateTicket from "./components/create/customer-create-ticket.component";
import Edit from "./components/edit-detail/edit";
import EmployeeTickets from "./components/create/employee-tickets.component";
import EmployeeCreateTicket from "./components/create/employee-create-ticket.component";
import CustomerTicketsResponse from "./components/create/employee-response.component";
import CusTicketDetail from "./components/edit-detail/customerTicket-detail";
import EmpTicketDetail from "./components/edit-detail/employeeTicket-detail";
import StateEdit from "./components/edit-detail/state-edit";
import CustDetail from "./components/edit-detail/cust-detail";
import EmpTicketDetail2 from "./components/edit-detail/employeeTicket-detail2";
import CustomerTicketsResponse2 from "./components/create/employee-response.component2";
//Html'e yüklenecek olan ilk dosyanın fonksiyonları
function App() {
  return (
    //yönlendirici
    // uygulamadaki her yol için yol ögesi oluşturuldu 
    // path= '/' ile rota URL ye gider yani ilk açılacak olan sayfaya 
    // oluşturdugumuz navbar js router içinde kullanılıyor 
    <Router>     
      <NavigationBar/>         
      <form className="container">
      <Route path="/" exact component ={Home}/>   
      <Route path="/EmployeeHome" exact component={EmployeeHome}/>
      <Route path="/CustomerHome" exact component={CustomerHome}/>
      <Route path="/CustomerCreateTicket" exact component={CustomerCreateTicket}/>
      <Route path="/edit/:id" exact component={Edit}/>
      <Route path="/EmployeeTickets" exact component={EmployeeTickets}/>
      <Route path="/EmployeeCreateTicket/:id" exact component={EmployeeCreateTicket}/>     
      <Route path="/CustomerTicketsResponse" exact component={CustomerTicketsResponse}/>       
      <Route path="/customerTicket-detail/:id" exact component={CusTicketDetail}/>  
      <Route path="/employeeTicket-detail/:id" exact component={EmpTicketDetail}/>
      <Route path="/state-edit/:id" exact component={StateEdit}/>
      <Route path="/cust-detail/:id" exact component={CustDetail}/>
      <Route path="/employeeTicket-detail2/:id" exact component={EmpTicketDetail2}/>
      <Route path="/CustomerTicketsResponse2" exact component={CustomerTicketsResponse2}/>
      </form>
    </Router>
  );
}
//react-router-dom ile farklı url lere farklı yönlendirmeler yapmak için
export default App;
