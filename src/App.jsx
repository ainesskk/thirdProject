import './App.css'
import Navbar from "./components/Navbar.jsx"
import CurrentWeather from "./components/CurrentWeather.jsx"
import WeatherOptionContainer from "./components/WeatherOptionContainer.jsx"
import Locations from "./components/Locations.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContextsProvidersContainer from "./contexts/ContextsProvidersContainer.jsx";

function App() {
    return (
        <Router basename="/weather-forecast/">
            <ContextsProvidersContainer>
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
            </ContextsProvidersContainer>
        </Router>
    );
}

export default App;
