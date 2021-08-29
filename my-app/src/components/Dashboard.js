import React, { useEffect, useState } from 'react';
import "./Dashboard.css";

function Dashboard() {
    var [token, setToken] = useState("");
    useEffect(() => {
        console.log("The URL of this page is: " + window.location.href);
        var url = window.location.href;
        var accessToken = window.location.href.split('code=').pop();  
        console.log(accessToken);

        fetch("http://localhost:3000/auth", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
            authKey: accessToken,
            uri: url,
            })
        })
        .then(res => res.json()) 
        .then(res => {
            console.log(res);
            console.log(res.access_token);
            setToken(res.access_token);
        })
        console.log(accessToken);
    }, []);
    
    return (
      <div className="Dashboard">
          <div className="text-container">
              {token}
          </div>
      </div>
  )
}
export default Dashboard;