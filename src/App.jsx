import './App.css'
import Navbar from "./components/Navbar.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import WeatherContextProvider from "./contexts/WeatherContextProvider.jsx";
import WeatherOptionContainer from "./components/WeatherOptionContainer.jsx";

function App() {

  return (
      <WeatherContextProvider>
          <Navbar/>
          <CurrentWeather/>
          <WeatherOptionContainer />
      </WeatherContextProvider>
  )
}

export default App
