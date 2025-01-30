export async function saveSettings(settings) {
    localStorage.removeItem('settings');
    localStorage.setItem('settings', JSON.stringify(settings));
}

export async function getSettings() {
    const settingsJSON = localStorage.getItem('settings');
    if (settingsJSON)
        return JSON.parse(settingsJSON);
    else
        return {
            feelTemperature: false,
            humidity: false,
            sunset: false,
        };
}

export async function saveCurrentLocation(currentLocation) {
    localStorage.removeItem('currentLocation');
    localStorage.setItem('currentLocation', currentLocation);
}

export async function getCurrentLocation() {
    return localStorage.getItem('currentLocation');
}

export async function setSavedLocations(savedLocations) {
    localStorage.removeItem('savedLocations');
    localStorage.setItem('savedLocations', savedLocations);
}

export async function getSavedLocations() {
    const savedLocations = localStorage.getItem('savedLocations');
    if (savedLocations)
        return JSON.parse(savedLocations);
    else
        return null;
}