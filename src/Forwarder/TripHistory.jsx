import React from 'react';
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';
import ForwarderNav from './ForwarderComp/ForwarderNav';

const TripHistory = () => {
  const tripHistory = JSON.parse(localStorage.getItem('acceptedRides')) || [];

  return (
    <div>
      <ForwarderNav />
      <div>
        <Link to='/ForHomePage'>
          <CiHome size={30} className='absolute right-0'/>
        </Link>
      </div>
      <div className='p-4'>
        <h2 className='text-2xl font-bold mb-4'>My Accepted Rides</h2>
        <ul>
          {tripHistory.map((trip, index) => (
            <li key={index} className='border-b py-2'>
              <div><strong>Source:</strong> {trip.source}</div>
              <div><strong>Destination:</strong> {trip.destination}</div>
              <div><strong>Distance:</strong> {trip.distance} km</div>
              <div><strong>Price:</strong> R{trip.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TripHistory;
