import React, { useState } from 'react';
import "./InitialLook.css";
import { trackPromise } from 'react-promise-tracker';

const InitialLook = () => {

  var [auth, setAuth] = useState("");
  function start() {
    trackPromise(
      fetch("https://spootifyit-backend.herokuapp.com/login", {
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
    )
  }

  return (
      <div className="InitialLook">
          <div className="text-container">
              <a className="header" href="https://samchsu.github.io">created by sam</a>
              <div className="center">
                <h1 onClick={start}>Spootify it</h1>
              </div>
              <p>{auth}</p>
          </div>
      </div>
  )
};

export default InitialLook;