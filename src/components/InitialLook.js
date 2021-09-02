import React, { useState } from 'react';
import "./InitialLook.css";
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoadingIndicator = props => {
  const { promiseInProgress } = usePromiseTracker();
  
  return (
    promiseInProgress && 
      <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Loader
          type="Bars"
          color="rgb(43, 25, 8)"
          height={100}
          width={100}
          timeout={100000} //3 secs
        />
      </div>
  );  
}

const InitialLook = () => {

  var [auth, setAuth] = useState("");
  var [isLoading, setIsLoading] = useState(false);
  function start() {
    setIsLoading(true);
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
              <div className="center">
                {isLoading === true ? <LoadingIndicator/> : <h1 onClick={start}>Spootify it</h1>}
              </div>
              <div className="header-wrapper">
                <a className="header" href="https://samchsu.github.io">created by sam</a>
              </div>
          </div>
      </div>
  )
};

export default InitialLook;