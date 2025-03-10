const url = "https://api.openweathermap.org/";

export async function getGeolocationWeather(latitude, longitude) {
    const fullUrl = `${url}data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_API_KEY}`;
    const response = await fetch(fullUrl);
    return response.json();
}

export async function getSearchCities(searchString) {
    const fullUrl = `${url}geo/1.0/direct?q=${searchString}&limit=5&appid=${import.meta.env.VITE_API_KEY}`;
    const response = await fetch(fullUrl);
    return response.json();
}

export async function getGeolocationWeatherWithCityName(cityName) {
    const fullUrl = `${url}data/2.5/weather?q=${cityName}&appid=${import.meta.env.VITE_API_KEY}`;
    const response = await fetch(fullUrl);
    return response.json();
}