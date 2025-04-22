import {useLocation, useNavigate} from "react-router-dom";

interface Location {
    name: string;
    region: string;
    country: string;
    localtime: string;
  }
  
  interface DayForecast {
    date: string;
    day: {
      maxtemp_c: number;
      mintemp_c: number;
      avgtemp_c: number;
      condition: {
        text: string;
        icon: string;
      };
    };
    astro: {
      sunrise: string;
      sunset: string;
    };
  }
  
  interface CityForecast {
    location: Location;
    forecast: {
      forecastday: DayForecast[];
    };
  }
  
  interface ForecastData {
    gliwice: CityForecast;
    hamburg: CityForecast;
  }


  export default function Forecast() {
    const location = useLocation();
    const data = location.state as ForecastData;
    const navigate = useNavigate();
    const handleReturnClick =() =>
        {
            navigate("/");
        }
        
    const renderCityForecast = (city: string, forecastData: CityForecast) => (
      <div style={{ marginBottom: "2rem", padding: "1rem", border: "1px solid #ccc" }}>
        <h2>{city}</h2>
        <p>
          <strong>{forecastData.location.name}</strong>, {forecastData.location.region}, {forecastData.location.country}
        </p>
        <p><em>Local time: {forecastData.location.localtime}</em></p>
  
        <h3>3-Day Forecast</h3>
        {forecastData.forecast.forecastday.map((day, index) => (
          <div key={index} style={{ padding: "0.5rem 1rem", borderBottom: "1px solid #eee" }}>
            <h4>{day.date}</h4>
            <p>
              <img src={`https:${day.day.condition.icon}`} alt={day.day.condition.text} />
              <strong>{day.day.condition.text}</strong>
            </p>
            <p>Avg Temp: {day.day.avgtemp_c}°C</p>
            <p>High: {day.day.maxtemp_c}°C | Low: {day.day.mintemp_c}°C</p>
            <p>Sunrise: {day.astro.sunrise} | Sunset: {day.astro.sunset}</p>
          </div>
        ))}
      </div>
    );
  
    return (
      <div>
        <h1>Weather Forecast</h1>
        {renderCityForecast("Hamburg", data.hamburg)}
        {renderCityForecast("Gliwice", data.gliwice)}
        
        <button onClick={handleReturnClick}>Return to Menu</button>
      </div>
    );
  }