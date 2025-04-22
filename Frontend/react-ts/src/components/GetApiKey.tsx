import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

export default function CurrentW() {
  const location = useLocation();
  const navigate = useNavigate();
  const type = location.state?.type; // 👈 get 'type' from previous view

  const [apiKey, setApiKey] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let response;

      if (type === "current") {
        response = await axios.post(`http://127.0.0.1:8000/realtime-weather/`, {
          api_key: apiKey,
        });
        navigate("/CurrentWeather", { state: response.data });
      } else if (type === "forecast") {
        response = await axios.post(`http://127.0.0.1:8000/forecast-weather/`, {
          api_key: apiKey,
        });
        navigate("/Forecast", { state: response.data });
      } else {
        console.warn("Unknown request type");
      }

      console.log(response?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>Input the API key</h2>
      <div className="CurrentW">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="API key"
            value={apiKey}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
