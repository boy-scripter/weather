import React, { useState } from "react";


function Weather() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState({
        mood: "Weather App",
        temp: 0 + " Cel",
        city: "Start",
        country: "Search",
        icon: ""
    });

    const handleonClick = async () => {
        let request = await fetch("http://api.weatherapi.com/v1/current.json?&key=584fa4cd9af147e185853335230401&q=" + input).then(param => param.json()).then(param => param);
        setResponse({
            mood: request["current"].condition.text,
            temp: request["current"]["temp_c"] + "Cel",
            city: request.location.name,
            country: request.location.country,
            icon: "https://" + request["current"].condition.icon.slice(2)
        })

    }
    return (
        <>
            <div className="wrapper">
                <div className="header">
                    <div className="text">
                        <p> Weather Viewer </p>
                        <span> Created By Shivam Gupta <br />React JS </span>
                    </div>
                </div>
                <div className="input">
                    <input type="text" id="input" value={input} onChange={(event) => { setInput(event.target.value) }} />
                    <input type="submit" id="submit" onClick={() => { handleonClick() }} />
                    <div id="response">
                        <span>{response.mood + ", " + response.temp}</span>
                        <p>{response.city + ", " + response.country}</p>
                        {response.icon && <img src={response.icon} width="100px" height="100px" />}
                    </div>
                </div>
            </div>
        </>
    )
}


export default Weather;