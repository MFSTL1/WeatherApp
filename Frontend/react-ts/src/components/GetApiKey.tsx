import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

export default function CurrentW() {
  const location = useLocation();
  const navigate = useNavigate();
  const type = location.state?.type; 

  const [apiKey, setApiKey] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };
  const handleSaveKey = async ()=>{
    try
    {
      let response = await axios.post('http://127.0.0.1:8000/manage-key/',{api_key: apiKey});
      console.log(response?.data)
    }
    catch(error){
      console.log("Error saving key",error)
    }
    
  }


  const handleLoadKey = async ()=>{
    try
    {
      let response = await axios.get('http://127.0.0.1:8000/manage-key/');
      console.log(response?.data)
      setApiKey(response.data.api_key);
    }
    catch(error){
      console.log("Error loading key",error)
    }
    
  }

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
<div className="flex items-center justify-center min-h-screen w-full flex-col">
  <h2 className="text-2xl font-bold mb-4">Input the API key</h2>
  <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
    <input
      type="text"
      placeholder="API key"
      value={apiKey}
      onChange={handleInputChange}
      className="p-2 border border-gray-300 rounded"
    />
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
      Submit
    </button>
    <div className="flex gap-2">
      <button
        type="button"
        onClick={handleLoadKey}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Load API Key
      </button>
      <button
        type="button"
        onClick={handleSaveKey}
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Save API Key
      </button>
    </div>
  </form>
</div>
  );
}
