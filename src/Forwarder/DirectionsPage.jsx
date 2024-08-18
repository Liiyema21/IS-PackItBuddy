import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DirectionsPage = () => {
  const [map, setMap] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);

  const location = useLocation();
  const { rideRequest } = location.state || {};

  useEffect(() => {
    const initMap = () => {
      if (!window.google) {
        console.error('Google Maps JavaScript API not loaded.');
        return;
      }

      const johannesburg = { lat: -26.2033, lng: 28.0473 }; // Center the map to Johannesburg
      const newMap = new window.google.maps.Map(document.getElementById('map__section'), {
        zoom: 10,
        center: johannesburg,
      });

      const newDirectionsService = new window.google.maps.DirectionsService();
      const newDirectionsRenderer = new window.google.maps.DirectionsRenderer({
        map: newMap,
        suppressMarkers: true
      });

      setMap(newMap);
      setDirectionsService(newDirectionsService);
      setDirectionsRenderer(newDirectionsRenderer);

      if (rideRequest) {
        const { source, destination } = rideRequest;
        const request = {
          origin: source,
          destination: destination,
          travelMode: 'DRIVING',
        };

        newDirectionsService.route(request, (result, status) => {
          if (status === 'OK') {
            newDirectionsRenderer.setDirections(result);
          } else {
            console.error('Directions request failed due to ' + status);
          }
        });
      }
    };

    if (window.google) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCKqk4I-ZPHLGueUz17Xhl-oCz0MZ2YVx0&libraries=places`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = initMap;
    }
  }, [rideRequest]);

  return (
    <div className='p-4'>
      <div
        id="map__section"
        className="w-full flex flex-col border-2 border-gray-400 rounded-xl py-4 px-2"
        style={{ height: '500px' }}
      ></div>
    </div>
  );
};

export default DirectionsPage;
