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

export async function saveSavedLocations(savedLocations) {
    localStorage.removeItem('savedLocations');
    localStorage.setItem('savedLocations', JSON.stringify(savedLocations));
    console.log("saveSavedLocations", localStorage.getItem('savedLocations'))
}

export async function getSavedLocations() {
    const savedLocations = localStorage.getItem('savedLocations');
    if (!savedLocations){
        console.log("!savedLocations", localStorage.getItem('savedLocations'))
        localStorage.setItem('savedLocations', '[]');
        return [];
    }
    const parseSavedLocations = JSON.parse(savedLocations);
    if (parseSavedLocations.length > 0){
        console.log("parseSavedLocations.length > 0", localStorage.getItem('savedLocations'))
        return JSON.parse(savedLocations);
    }
    else{
        console.log("else", localStorage.getItem('savedLocations'))
        localStorage.setItem('savedLocations', '[]');
        return [];
    }
}

export async function saveSelectedLocation(selectedLocation) {
    localStorage.removeItem('selectedLocation');
    localStorage.setItem('selectedLocation', selectedLocation);
}

export async function getSelectedLocation() {
    const selectedLocation = localStorage.getItem('selectedLocation');
    if (selectedLocation)
        return selectedLocation;
    else
        return null;
}