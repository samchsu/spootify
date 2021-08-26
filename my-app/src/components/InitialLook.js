import React from 'react';
import "./InitialLook.css";
const InitialLook = () => {

    function start() {
        fetch("https://accounts.spotify.com/authorize?39c7513b9e4544efaea531cdb0fb9e0d", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
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