// Initialize the map using OpenStreetMap
const map = L.map('MyMap');
console.log(map);
map.setView([51.505, -0.09], 13); // Set initial coordinates and zoom level

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const API_KEY = 'b9cd96ac42c71147b3b65378182a94a5';

// Function to update flight position
async function updateFlightPosition() {
    try {
        const flightCode = 'UA2402'; // Replace with the actual flight code

        // This requires serving off of HTTP, or a paid subscription

        /*
        const response = await fetch(`http://api.aviationstack.com/v1/flights?flight_iata=${flightCode}&access_key=${API_KEY}`);

        const data = await response.json();
        */

        // if (data.data.length > 0) {
        if (true) {
            // const flight = data.data[0];
            // const lat = parseFloat(flight.live.latitude);
            // const lon = parseFloat(flight.live.longitude);

            lat = "55.5";
            lon = "10.7";
            // Update the marker position
            if (marker) {
                marker.setLatLng([lat, lon]);
            } else {
                marker = L.marker([lat, lon]).addTo(map);
            }
        } else {
            console.error('Flight data not available.');
        }
    } catch (error) {
        console.error('Error fetching flight data:', error);
    }
}

let marker = null;

// Update flight position every 5 seconds
setInterval(updateFlightPosition, 5000);
