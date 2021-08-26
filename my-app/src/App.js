import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import InitialLook from "./components/InitialLook";

function App() {
  return (
    <div className="App">
      <NavBar />
      <InitialLook/>
    </div>
  );
}

export default App;
