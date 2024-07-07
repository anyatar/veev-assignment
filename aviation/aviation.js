const express = require('express');
const axios = require('axios');
const L = require('leaflet');

const app = express();
const PORT = process.env.PORT || 3001;

const AVIATIONSTACK_API_KEY = 'b9cd96ac42c71147b3b65378182a94a5';

app.get('/', async (req, res) => {
  try {
    const flightNumber = 'LY001';
    const url = `https://api.aviationstack.com/v1/flights?access_key=${AVIATIONSTACK_API_KEY}&flight_iata=${flightNumber}`;
    const response = await axios.get(url);
    const flightData = response.data.data[0];

    const { latitude, longitude } = flightData;

    // Initialize the map
    const map = L.map('map').setView([latitude, longitude], 10);

    // Add a tile layer (use your preferred OSM tile provider)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Create a marker for the flight position
    const flightMarker = L.marker([latitude, longitude]).addTo(map);

    // Your logic to update the marker position goes here

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Flight Tracker</title>
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
        </head>
        <body>
          <div id="map" style="height: 400px;"></div>
          <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Error fetching flight data:', error.message);
    res.status(500).send('Error fetching flight data');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});