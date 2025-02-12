export function saveLocationSwitcherOption(isSavedOptionChosen) {
    sessionStorage.removeItem('isSavedOptionChosen');
    sessionStorage.setItem('isSavedOptionChosen', isSavedOptionChosen);
}

export function getLocationSwitcherOption() {
    const isSavedOptionChosen = sessionStorage.getItem('isSavedOptionChosen');
    if (!isSavedOptionChosen){
        saveLocationSwitcherOption(true)
        return true;
    }
    else{
        return isSavedOptionChosen === 'true';
    }
}