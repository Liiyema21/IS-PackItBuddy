import React, { useEffect, useState } from 'react';
import ForwarderNav from './ForwarderComp/ForwarderNav';
import { useNavigate } from 'react-router-dom';
import { RiLogoutCircleRLine } from "react-icons/ri";

const ForHomePage = () => {
  const [rideDetails, setRideDetails] = useState(null);
  const [rideAccepted, setRideAccepted] = useState(false);

  useEffect(() => {
    // Fetch the most recent ride details from localStorage
    const tripHistory = JSON.parse(localStorage.getItem('rideHistory')) || [];
    if (tripHistory.length > 0) {
      const latestTrip = tripHistory[tripHistory.length - 1]; // Get the most recent trip
      const totalPrice = localStorage.getItem('totalPrice'); // Retrieve the total price
      if (totalPrice) {
        latestTrip.price = totalPrice; // Ensure the price matches the one from GetQuote
      }
      setRideDetails(latestTrip);
    }

    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: -26.2033, lng: 28.0473 }, // Default center
      });

      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      const request = {
        origin: rideDetails ? rideDetails.source : { lat: -26.2033, lng: 28.0473 },
        destination: rideDetails ? rideDetails.destination : { lat: -25.7461, lng: 28.1881 },
        travelMode: 'DRIVING',
      };

      directionsService.route(request, (result, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(result);
        }
      });
    };

    if (window.google) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCKqk4I-ZPHLGueUz17Xhl-oCz0MZ2YVx0&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = initMap;
    }
  }, [rideDetails]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    sessionStorage.removeItem('userSession');
    navigate('/');
  };

  const handleAcceptRide = () => {
    if (!rideDetails) {
      console.error('No ride details available');
      return;
    }

    // Add ride details to acceptedRides
    const acceptedRides = JSON.parse(localStorage.getItem('acceptedRides')) || [];
    acceptedRides.push(rideDetails);
    localStorage.setItem('acceptedRides', JSON.stringify(acceptedRides));

    // Remove ride details from rideHistory
    const rideHistory = JSON.parse(localStorage.getItem('rideHistory')) || [];
    const updatedRideHistory = rideHistory.filter(ride => ride !== rideDetails);
    localStorage.setItem('rideHistory', JSON.stringify(updatedRideHistory));

    // Redirect to Google Maps directions
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(rideDetails.source)}&destination=${encodeURIComponent(rideDetails.destination)}`;
    window.location.href = directionsUrl;

    setRideAccepted(true);
  };

  return (
    <div className='bg-gray-50'>
      <ForwarderNav />
      <div className='px-4 py-2'>
        <button
          onClick={handleLogout}
          className="mt-4 border border-gray-200 text-2xl rounded-full"
        >
          <RiLogoutCircleRLine className='animate-pulse absolute right-0 text-[#131a4b]'/>
        </button>
      </div>

      <main className="flex flex-col items-center min-h-screen p-5">
        <div id="map" className="h-64 w-full rounded-lg overflow-hidden shadow-sm mb-2"></div>
        <div className="bg-gray-50 rounded-lg shadow-lg p-6 w-full max-w-lg z-10">
          <h3 className="text-2xl font-bold flex items-center mb-4">
            <span className="mr-2">🚚</span> Truck
          </h3>
          {rideAccepted ? (
            <p className="text-lg font-semibold">No Ride Requested</p>
          ) : rideDetails ? (
            <>
              <div className="text-2xl font-bold mb-2">R{rideDetails.price}</div>
              <div className="text-gray-600 mb-2">★ 4.75</div>
              <div className="text-gray-600 mb-2">Moving Date: {rideDetails.movingDate || 'N/A'}</div>
              <div className="text-gray-700 mb-2">
                <span>5 mins (1.0 mi) away</span>
                <br />
                <span>{rideDetails.source}</span>
              </div>
              <div className="text-gray-700 mb-2">
                <span>2 hr 44 min (97.3 mi) trip</span>
                <br />
                <span>{rideDetails.destination}</span>
              </div>
              <div className="text-gray-700 mb-2">
                <span>Long trip (45+ min)</span>
              </div>
              <button
                onClick={handleAcceptRide}
                className=" px-4 block text-center bg-yellow-400 text-black py-3 rounded-lg text-lg"
              >
                Accept
              </button>
            </>
          ) : (
            <p>Loading ride details...</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ForHomePage;
