import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Reviews = () => {
  const [referralCode, setReferralCode] = useState("user12345"); // Example code

  const referralLink = `${window.location.origin}/referral/${referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };

  return (
    <div>
      <NavBar />
      <div>
      <Link to='/LandingPage'>
        <CiHome size={30} className='absolute right-0'/>
      </Link>

      </div>
      <div className='container mx-auto flex'>
        <div className="sm:w-1/2 lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 lg:absolute left-96 z-10 shadow-md">
          <h2 className="text-gray-900 text-3xl mb-1 font-medium title-font">Referrals</h2>
          <p className="leading-relaxed mb-5 text-gray-600 text-lg">Refer a Friend</p>

          <p className="text-xl text-gray-500 mt-3">Your Referral Link</p>
          <div className="relative mb-4">
            <input 
              type="text" 
              value={referralLink} 
              readOnly 
              className="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8"
            />
            <button onClick={copyToClipboard} className="mt-2 bg-indigo-500 text-white px-3 py-1 rounded">Copy Link</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Reviews;
