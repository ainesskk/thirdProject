import './App.css'
import Navbar from "./components/Navbar.jsx"
import CurrentWeather from "./components/CurrentWeather.jsx"
import WeatherContextProvider from "./contexts/WeatherContextProvider.jsx"
import WeatherOptionContainer from "./components/WeatherOptionContainer.jsx"
import Locations from "./components/Locations.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <Router basename="/weather-forecast/">
            <WeatherContextProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <CurrentWeather />
                            <WeatherOptionContainer />
                        </>
                        } />
                    <Route path="/locations" element={<Locations />} />
                </Routes>
            </WeatherContextProvider>
        </Router>
    );
}

export default App;
