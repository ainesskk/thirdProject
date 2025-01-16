import apiKey from './apiKey';

const url = "https://api.openweathermap.org/data/2.5/weather?";

export async function getGeolocationWeather(latitude, longitude) {
    const fullUrl = `${url}lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    const response = await fetch(fullUrl);
    return await response.json();
}