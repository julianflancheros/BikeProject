var map = L.map('main_map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map);
L.marker([51.9, -0.08]).addTo(map);
L.marker([51.8, -0.07]).addTo(map);