// Get the spots
const apiUrl = 'http://localhost:8080';

export const directions = {
    "south": "⬇️",
    "north": "⬆️",
    "east": "➡️",
    "west": "⬅️",
    "southeast": "↘️",
    "northeast": "↗️",
    "southwest": "↙️",
    "northwest": "↖️"
};

export function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export function fetchAllSpots() {
    return fetch(`${apiUrl}/api/spots`)
        .then(response => response.json());
}

export function fetchAllRelatedSpots(id) {
    return fetch(`${apiUrl}/api/similar-spots/${id}`)
        .then(response => response.json());
}

export function fetchAllExperiences() {
    return fetch(`${apiUrl}/api/experiences`)
        .then(response => response.json());
}

export function fetchSpotById(id) {
    return fetch(`${apiUrl}/api/spots/${id}`)
        .then(response => response.json());
}
