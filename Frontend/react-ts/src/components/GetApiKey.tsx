import React, { useState } from "react";
import axios from "axios";

const handleSubmit = async (
  e: React.FormEvent,
  apiKey: string // Add the API key parameter here
) => {
  e.preventDefault();
  try {
    const response = await axios.post(`http://127.0.0.1:8000/get-key/`,{api_key:apiKey,});
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default function CurrentW() {
  const [apiKey, setApiKey] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  return (
    <div>
      <h2>Input the API key</h2>

      <div className="CurrentW">
        <form onSubmit={(e) => handleSubmit(e, apiKey)}>
          <input
            type="text"
            placeholder="API key"
            value={apiKey}
            onChange={handleInputChange} // Handle input changes
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
