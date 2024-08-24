import React, { useState } from 'react';
import './Test.css';
import PackitByddyLogo from '../assets/OurLogo.png';
import Truck4 from '../assets/Truck4.jpg'
import Business from '../assets/business.jpg';
import Local from '../assets/local.jpg';
import Long from '../assets/long.jpg';
import X from '../assets/x3.png';
import Facebook from '../assets/f2.png';
import Instagram from '../assets/instagram.png';
import { SignInButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom'



const Test = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
      <img src={PackitByddyLogo} alt="Our Logo" />
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li className='text-gray-800'>
          <Link to='/ForForm'>
         
          <a href="#" className='nav-link driver'>Become a driver</a>
          </Link>
        </li>
        <li className="text-gray-800">
          <a href="#" className="nav-link">Services</a>
          <ul>
            <li className="nav-item"><a href="#" className="nav-link">Local Moving</a></li>
            <li className="nav-item"><a href="#" className="nav-link">International Moving</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Packing Services</a></li>
          </ul>
        </li>
        <li className="text-gray-800">
          <a href="#" className="nav-link">About</a>
          <ul>
            <li className="nav-item"><a href="#" className="nav-link">Our Story</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Team</a></li>
          </ul>
        </li>
        <li className="text-gray-800">
          <a href="#" className="nav-link">Contact</a>
          <ul>
            <li className="nav-item"><a href="#" className="nav-link">Locations</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Support</a></li>
          </ul>
        </li>
        <lable className="nav-item text-white">
          <Link className='bg-[#131a4b] px-4 rounded-md py-2'
           to='/LogInFormClient'> Sign In
          </Link>
        </lable>
      </ul>
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
      {/* Hero Section */}
      <section className="hero">
        <h1>Local & Long Distance Moving</h1>
        <p>Professional removal services from packing to unpacking</p>
        <div className="btn-group">
          <a href="#">Services</a>
          <a href="#" className="about__Us">About Us</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h3>OUR SERVICES</h3>
        <h2>Furniture Removals & Storage</h2>
        <p>Offering reliable and professional moving services tailored to your needs.</p>
      </section>

      {/* Card Section */}
      <section className="card-section">
        <div className="card">
        <img src={Local} alt="Local"></img>

          <h3>Local Moving</h3>
          <p>Whether it is a small flat or major household, this will be the best move you’ll ever make.</p>
        </div>
        <div className="card">
          <img src={Long} alt='long '></img>
          <h3>Long Distance Moving</h3>
          <p>Relocating? Our long-distance moving service ensures a stress-free move with full support, so your belongings arrive safely and on time, wherever you go.</p>
        </div>
        <div className="card">
          <img src={Business} alt='Business'></img>
          <h3>Business Move</h3>
          <p>With PackitBuddy you don’t simply move your office, you relocate with a minimum of disruption.</p>
        </div>
      </section>

      {/* Why Move With Us Section */}
      <section className="why-move-section">
        <h2>Why Move With Us?</h2>
        <p>Your move should be easy and stress-free, no matter the distance or size.</p>
        <div className="reasons">
          <div className="reason">
            <h3>Experienced Movers</h3>
            <p>Our team consists of highly trained professionals who have years of experience in the moving industry. We understand the intricacies of every move, ensuring your belongings are handled with the utmost care and expertise.</p>
          </div>
          <div className="reason">
            <h3>Affordable Pricing</h3>
            <p>Moving doesn’t have to break the bank. We offer competitive rates without compromising on quality, making us the go-to choice for cost-effective and reliable moving services.</p>
          </div>
          <div className="reason">
            <h3>Client Satisfaction</h3>
            <p>Our mission is to continuously strive to provide excellent service levels and meet customers' expectations.</p>
          </div>
          <div className="reason">
            <h3>Comprehensive Services</h3>
            <p>From packing and loading to transportation and unpacking, we provide a full range of services to meet all your moving needs. No matter the size or complexity of the move, we’ve got you covered.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div>
          <h3>About Us</h3>
          <p>PackItBuddy is gearing up to move South African families with care and expertise, launching soon to make every move a smooth journey.</p>
          <div className="social-icons">
            <a href="#"><img src={Facebook} alt='facebook'></img></a>
            <a href="#"><img src={X} alt='X'></img></a>
            <a href="#"><img src={Instagram} alt='insta'></img></a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            <li><a href="#">Business Moving</a></li>
            <li><a href="#">Office Move</a></li>
            <li><a href="#">Long Distance</a></li>
            <li><a href="#">Local Move</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>PackItBuddy Headquarters</p>
          <p>138 Van Beek Street</p>
          <p>Ellis Park 2094</p>
          <p className="phone">012-345-6789 / 012-876-5432</p>
          <p className="email">info@packitbuddy.co.za</p>
          <p>Monday – Friday: 7:30 AM – 5:00 PM</p>
          <p>Saturday: 8:00 AM – 11:00 AM</p>
        </div>
        <div className="footer copyright">
          <p>© 2024 PackitBuddy. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Test;
