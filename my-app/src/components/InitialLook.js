import React, { useState } from 'react';
import "./InitialLook.css";
const InitialLook = () => {

  var [auth, setAuth] = useState("");
  function start() {
      fetch("http://localhost:3000/login", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(data => data.json()) 
      .then(data => {
        console.log(data);
        setAuth(data);
        window.location.href = data;
      })
  }
  
  return (
      <div className="InitialLook">
          <div className="text-container">
              <h1 onClick={start}>Start</h1>
              <p>{auth}</p>
          </div>
      </div>
  )
};

export default InitialLook;