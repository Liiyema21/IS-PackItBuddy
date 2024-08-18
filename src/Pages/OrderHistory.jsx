import React from 'react';
import NavBar from '../Components/NavBar';
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';

const OrderHistory = () => {
  const tripHistory = JSON.parse(localStorage.getItem('rideHistory')) || [];
  console.log(tripHistory); // Add this line to see if data is retrieved

  return (
    <div>
      <NavBar />
      <div>
        <Link to='/LandingPage'>
          <CiHome size={30} className='absolute right-0'/>
        </Link>
      </div>
      <div className='p-4'>
        <h2 className='text-2xl font-bold mb-4'>My Ride History</h2>
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

export default OrderHistory;
