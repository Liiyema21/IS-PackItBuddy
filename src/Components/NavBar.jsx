import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PackitByddyLogo from '../assets/PLogo.png';

const ForwarderNav = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#131a4b]">
      <div>
        <img
          src={PackitByddyLogo}
          alt="Our Logo"
          className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] text-3xl mb-12"
        />
      </div>

      <ul className="hidden md:flex">
        <div>
          <Link
            className="px-2 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-amber-400 duration-200"
            to="/OrderHistory"
          >
            Trip History
          </Link>
          <Link
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-amber-400 duration-200"
            to="/Reviews"
          >
            Referrals
          </Link>
          <Link
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-amber-400 duration-200"
            to="/SupportPage"
          >
            Support
          </Link>
          <Link
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-amber-400 duration-200"
            to="/Deals"
          >
            Deals
          </Link>
        </div>
      </ul>

      <div
        onClick={toggleNav}
        className="cursor-pointer pr-4 z-20 text-gray-500 md:hidden"
        aria-label="Toggle navigation menu"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div
          className="fixed top-0 right-0 w-1/3 h-full bg-[#131a4b] text-gray-500 z-50 flex flex-col"
          style={{ transition: 'transform 0.3s ease-in-out' }}
        >
          <div
            onClick={toggleNav}
            className="flex justify-end p-4 cursor-pointer text-gray-500"
            aria-label="Close navigation menu"
          >
            <FaTimes size={30} />
          </div>
          <ul className="flex flex-col items-center justify-center flex-grow">
            <li className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] hover:text-amber-100
             px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={toggleNav} to="/OrderHistory">Trip History</Link>
            </li>
            <li className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] hover:text-amber-100
             px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={toggleNav} to="/Reviews">Referrals</Link>
            </li>
            <li className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] hover:text-amber-100
             px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={toggleNav} to="/SupportPage">Support</Link>
            </li>
            <li className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]
             hover:text-amber-100 px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link onClick={toggleNav} to="/Deals">Deals</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default ForwarderNav;
