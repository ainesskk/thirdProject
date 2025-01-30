const url = "https://api.openweathermap.org/data/2.5/weather?";

export async function getGeolocationWeather(latitude, longitude) {
    const fullUrl = `${url}lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_API_KEY}`;
    const response = await fetch(fullUrl);
    const responseJSON = response.json();
    return await responseJSON;
}