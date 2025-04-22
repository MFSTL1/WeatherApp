import "./Menu.css";

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
            <h2>Weather information for Gliwice and Hamburg</h2>
            <section>
              <button onClick={()=>handleButtonClick("current")}>Current Weather </button>
              <button onClick={()=>handleButtonClick("forecast")}>Forecast</button>
              <button onClick={()=>navigate("/About")}>About</button>
            </section>
        </div>
    )
}