import React from 'react';
import "./InitialLook.css";
const InitialLook = () => {

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
          window.location.href = data;
        })
    }
    
    return (
        <div className="InitialLook">
            <div className="text-container">
                <h1 onClick={start}>Start</h1>
            </div>
        </div>
    )
};

export default InitialLook;