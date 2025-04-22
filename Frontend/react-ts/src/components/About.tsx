import { useNavigate } from "react-router-dom";
import './About.css';
export default function About() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    
        <div>
          <p className="text-box">
            To jest aplikacja wykonana w ramach rekrutacji.
            <br />
            Autor: <strong>Bartłomiej PIłot</strong>
          </p>
      
          <button onClick={handleButtonClick}>Return to menu</button>
        </div>
      
  );
}
