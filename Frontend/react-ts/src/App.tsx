import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import Forecast from "./components/Forecast";
import GetAPI from "./components/GetApiKey";
import CurrentWeather from "./components/CurrentW";
import About from "./components/About";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/requestAPI" element={<GetAPI/>} />
        <Route path="/CurrentWeather" element={<CurrentWeather/>}/>
        <Route path="/Forecast" element={<Forecast/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
