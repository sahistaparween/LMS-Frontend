//import logo from './logo.svg';
import { CustomerLogin } from './components/CustomerComponents/CustomerLogin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ManagerLogin } from './components/ManagerComponents/ManagerLogin';
import { ListCustomerComponent } from './components/CustomerComponents/ListCustomerComponents';
import { UpdateCustomerComponent } from './components/CustomerComponents/UpdateCustomerComponent';
import { AddCustomerComponent } from './components/CustomerComponents/CustomerRegistration';
import React from 'react';
import Home from './components/Home';

import './App.css';


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
      
      <Route path="/addcustomer" component={AddCustomerComponent}></Route>
      <Route path="/updatecustomer/:Id" component={UpdateCustomerComponent}></Route>  
      </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
