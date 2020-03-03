import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Signup from './pages/signup'
import Login from './pages/login'
import Profile from './pages/profile'
import Services from './pages/servic'
import Accounting from './pages/servic/accounting'
import Finance from './pages/servic/finance'
import Inventory from './pages/servic/inventory'
import Purchases from './pages/servic/purchases'
import Quotation from './pages/servic/quotation'
import Sales from './pages/servic/sales'
import Help from './pages/help'
import Privacy from './pages/privacy'
import Terms from './pages/terms'
import NotFound from './components/NotFound.js';

export default () => (
  
  <BrowserRouter>  
    <Navbar/>  
    <Switch>      
      <Route exact path="/" component={Home} />  
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />    
      <Route exact path="/services" component={Services} /> 
      <Route exact path="/terms" component={Terms} /> 
      <Route exact path="/privacy" component={Privacy} /> 
      <Route exact path="/help" component={Help} /> 
      <Route exact path="/services/accounting" component={Accounting} /> 
      <Route exact path="/services/finance" component={Finance} /> 
      <Route exact path="/services/inventory" component={Inventory} /> 
      <Route exact path="/services/purchases" component={Purchases} /> 
      <Route exact path="/services/quotation" component={Quotation} /> 
      <Route exact path="/services/sales" component={Sales} /> 
      <Route component={NotFound} />    
    </Switch>  
    <Footer/>
  </BrowserRouter>
  )
