import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import InitialLook from "./components/InitialLook";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
        <Route exact path="/">
            <Redirect to="/initial" component={InitialLook}/>
          </Route>
          <Route path="/initial">  
              < InitialLook />
          </Route>
          <Route path="/dashboard" component={Dashboard}>             
          </Route>
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
