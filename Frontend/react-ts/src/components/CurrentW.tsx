
import {useLocation ,useNavigate} from "react-router-dom";



interface LocationData {
  name: string;
  region: string;
  country: string;
  localtime: string;
}

interface CurrentData {
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
  wind_kph: number;
  humidity: number;
}

interface CityWeather {
  location: LocationData;
  current: CurrentData;
}

interface WeatherResponse {
  hamburg: CityWeather;
  gliwice: CityWeather;
}



export default function CurrentWeather(){
    const location = useLocation();
    const weatherData = location.state as WeatherResponse;
    const navigate = useNavigate();
    const handleReturnClick =() =>
    {
        navigate("/");
    }
    
    const renderData = (city: string, data:CityWeather) => (
        <div style={{ border: "1px solid gray", padding: "1rem", margin: "1rem" }}>
      <h2>{city}</h2>
      <p>
        <strong>Location:</strong> {data.location.name}, {data.location.region},{" "}
        {data.location.country}
      </p>
      <p>
        <strong>Local Time:</strong> {data.location.localtime}
      </p>
      <p>
        <strong>Temperature:</strong> {data.current.temp_c}°C
      </p>
      <p>
        <strong>Condition:</strong> {data.current.condition.text}
        <img
          src={`https:${data.current.condition.icon}`}
          alt={data.current.condition.text}
        />
      </p>
      <p>
        <strong>Humidity:</strong> {data.current.humidity}%
      </p>
      <p>
        <strong>Wind:</strong> {data.current.wind_kph} km/h
      </p>
    </div>
    );

    return (
<div>
      <h1>Current Weather</h1>
      {renderData("Hamburg", weatherData.hamburg)}
      {renderData("Gliwice", weatherData.gliwice)}
      <button onClick={handleReturnClick}>Return to Menu</button>
    </div>

    );
}