import { useNavigate } from "react-router-dom";
import './About.css';


export default function About() {
  //about me page 
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    
        <div>
          <p className="text-box">
            Moja własna aplikacja pogodowa.<br/>
            Ta aplikacja wykorzystuje  
            <a href="http://www.weatherapi.com/"  target="_blank" rel="noopener noreferrer"> WeatherApi</a>
            
            <br />
            Autor: <strong>Bartłomiej Piłot</strong>
          </p>
          <p>
          <a href="https://github.com/MFSTL1" target="_blank" rel="noopener noreferrer">Github</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/bart%C5%82omiej-pi%C5%82ot-b8a924352/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </p>
          
          <button onClick={handleButtonClick}>Return to menu</button>
        </div>
      
  );
}
