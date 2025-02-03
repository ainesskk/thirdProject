import './App.css'
import Navbar from "./components/Navbar.jsx"
import Locations from "./components/Locations.jsx"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ContextsProvidersContainer from "./contexts/ContextsProvidersContainer.jsx";
import SelectedCityWeather from "./components/SelectedCityWeather.jsx";
import NotFound from "./components/NotFound.jsx";
import SearchCityWeather from "./components/SearchCityWeather.jsx";

function App() {
    return (
        <Router>
            <ContextsProvidersContainer>
                <Navbar />
                <Routes>
                    <Route path="/" element={<SelectedCityWeather />} />
                    <Route path="/locations" element={<Locations />} />
                    <Route path="/locations/:cityName" element={<SearchCityWeather />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ContextsProvidersContainer>
        </Router>
    );
}

export default App;
