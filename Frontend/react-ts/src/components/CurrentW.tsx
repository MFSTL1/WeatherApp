import React, { useState, useEffect } from "react";
import axios from "axios";
import {useLocation, useNavigate } from "react-router";

export default function CurrentWeather(){
    const location = useLocation();
    const [weatherData, setWeatherData] = useState<any>(null);
    
    return 0;
}