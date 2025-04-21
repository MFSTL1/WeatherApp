import React from "react";
import axios from "axios";

import { useNavigate } from "react-router";
import nubisoftLogo from "../assets/nubisoft.svg";


export default function Menu(){
    const navigate = useNavigate();
    const handleButtonClick = (type:"current"|"forecast")=>{navigate("/requestAPI",{state:{type}})};
    return (
        
        <div className="button-container">
             <div>
        <a href="https://nubisoft.io/" target="_blank">
          <img src={nubisoftLogo} className="" alt="Nubisoft logo" />
        </a>
      </div>
            <span>Weather information for Gliwice and Hamburg</span>
            <section>
            <button onClick={()=>handleButtonClick("current")}>Current Weather </button>
            <button onClick={()=>handleButtonClick("forecast")}>Forecast</button>
            </section>
        </div>
    )
}