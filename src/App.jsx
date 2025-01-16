import './App.css'
import Navbar from "./components/Navbar.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import WeatherContextProvider from "./contexts/WeatherContextProvider.jsx";

function App() {

  return (
      <WeatherContextProvider>
          <div className="main-container">
              <Navbar/>
              <CurrentWeather/>
          </div>
      </WeatherContextProvider>
  )
}

export default App
