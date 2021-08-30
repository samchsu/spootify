import React, { useEffect, useState } from 'react';
import "./Dashboard.css";

function Dashboard() {
    var [token, setToken] = useState("");
    var [data, setData] = useState([]);
    var [auth, setAuth] = useState("");
    
    var count = 0;

    useEffect(() => {
        console.log("The URL of this page is: " + window.location.href);
        var url = window.location.href;
        var accessToken = window.location.href.split('code=').pop();  

        fetch("https://spootifyit-backend.herokuapp.com/auth", {
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
            //console.log(res);
            //console.log(res.access_token);
            setToken(res.access_token);
        })
    }, []);

    function refresh() {
        fetch("https://spootifyit-backend.herokuapp.com/login", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
        })
        .then(data => data.json()) 
        .then(data => {
            //console.log(data);
            setAuth(data);
            window.location.href = data;
        })
    } 
    async function topTracksL() {
        try {
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
            //console.log(res);
            setData(res.items);
        })
          }
          catch(err) {
            console.log("Please refresh");
          }

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
            //console.log(res);
            setData(res.items);
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
            //console.log(res);
            setData(res.items);
        })
    }

    return (
      <div className="Dashboard">
          <div onClick={refresh} className="spootify">Spootify</div>
                <div className="container">
                    <div className="btns" onClick={topTracksS}>last month</div>
                    <div className="btns" onClick={topTracksM}>last 6 months</div>
                    <div className="btns" onClick={topTracksL}>all time</div>
                </div>
                
              <ul>
                 { data ? data.map((track, i)=> (
                    <li key={i}>
                        <div className="tracks">
                            {i+1}. <track-name>{track?.name}</track-name> - {track?.artists[0].name} <br></br>
                        </div>
                    </li> 
                )) : "Unable to load data. Please press Spootify to continue."}
              </ul>
              <br></br>
              <br></br>
      </div>
  )
}
export default Dashboard;