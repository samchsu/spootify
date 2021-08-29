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
    console.log(token)

    async function topTracksL() {
        await fetch ("https://api.spotify.com/v1/me/top/tracks?time_range=long_term", {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
        .then (res => res.json())
        .then (res => {
            console.log(res);
        })
    }

    async function topTracksM() {
        await fetch ("https://api.spotify.com/v1/me/top/tracks?time_range=medium_term", {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
        .then (res => res.json())
        .then (res => {
            console.log(res);
        })
    }

    async function topTracksS() {
        await fetch ("https://api.spotify.com/v1/me/top/tracks?time_range=short_term", {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token,
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
        .then (res => res.json())
        .then (res => {
            console.log(res);
        })
    }

    return (
      <div className="Dashboard">
          <div className="text-container">
              {token}
              <br></br>
              <button onClick={topTracksL}>all time</button>
              <button onClick={topTracksM}>last 6 months</button>
              <button onClick={topTracksS}>last month</button>
              <br></br>
              <a href="http://localhost:3001" class="btn btn-primary">Go back</a>
          </div>
      </div>
  )
}
export default Dashboard;