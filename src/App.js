//import logo from './logo.svg';
import { CustomerLogin } from './components/CustomerComponents/CustomerLogin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ManagerLogin } from './components/ManagerComponents/ManagerLogin';
import { ListCustomerComponent } from './components/CustomerComponents/ListCustomerComponents';
import { UpdateCustomerComponent } from './components/CustomerComponents/UpdateCustomerComponent';
import { AddCustomerComponent } from './components/CustomerComponents/CustomerRegistration';
import React from 'react';
import Home from './components/Home';
import { UpdateLoan } from './components/LoanComponents/UpdateLoanComponent';
import './App.css';
import { GetCustomerById } from './components/CustomerComponents/GetCustomerById';
import { AddLoanComponent } from './components/LoanComponents/AddLoanComponent';
import GetLoanById from './components/LoanComponents/GetLoanById';
import { ListLoanComponent } from './components/LoanComponents/ListLoanComponent';
import { GetAllManagers } from './components/ManagerComponents/GetAllManagers';
function App() {
  return (
    <div>
    <BrowserRouter>
    
     <div className="container-fluid">
      <Switch>
      <Route path='/' exact component={Home} />  
      <Route path="/getallcustomers" component={ListCustomerComponent}></Route>
      <Route path="/CustomerLogin" component={CustomerLogin} />
      <Route path="/ManagerLogin" component={ManagerLogin} />
      <Route path="/getcustomer/:Id" component={GetCustomerById}></Route>
      <Route path="/addcustomer" component={AddCustomerComponent}></Route>
      <Route path="/updatecustomer/:Id" component={UpdateCustomerComponent}></Route>  
      
      <Route path="/updateloandetails/:Id" component={UpdateLoan}></Route> 
      <Route path="/addloandetails" component={AddLoanComponent}></Route>
      <Route path="/getloandetails/:Id" component={GetLoanById}></Route>
      <Route path="/getallloandetails" component={ListLoanComponent}></Route>
      <Route path="/getallmanager" component={GetAllManagers}></Route>
      </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
