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