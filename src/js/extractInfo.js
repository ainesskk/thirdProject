const extractInfo = (responseData) => {
    const sunsetTimestamp = responseData.sys.sunset;
    const sunsetDate = new Date(sunsetTimestamp * 1000);
    const sunriseTimestamp = responseData.sys.sunrise;
    const sunriseDate = new Date(sunriseTimestamp * 1000);

    return {
        city: responseData.name,
        temperature: Math.round(responseData.main.temp - 273.15),
        description: responseData.weather[0].description,
        icon: responseData.weather[0].icon,
        feelTemperature: Math.round(responseData.main.feels_like - 273.15),
        humidity: responseData.main.humidity,
        sunset: (sunsetDate.getHours() < 10 ? "0" + sunsetDate.getHours() : sunsetDate.getHours()) + ":" + (sunsetDate.getMinutes() < 10 ? "0" + sunsetDate.getMinutes() : sunsetDate.getMinutes()),
        sunrise: (sunriseDate.getHours() < 10 ? "0" + sunriseDate.getHours() : sunriseDate.getHours()) + ":" + (sunriseDate.getMinutes() < 10 ? "0" + sunriseDate.getMinutes() : sunriseDate.getMinutes()),
        windSpeed: responseData.wind.speed,
        pressure: responseData.main.pressure,
    };
}

export default extractInfo;