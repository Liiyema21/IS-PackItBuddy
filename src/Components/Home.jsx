import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import PackitByddyLogo from '../assets/OurLogo.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div  className='bg-gradient-to-b from-slate-300 via-slate-200 to-slate-300 h-full lg:h-screen px-20  '>
       <div className=''>
        <button className='absolute right-0 px-4 hover:text-amber-100 py-2'>
          <Link to='/ForForm'>
          Register as a Forwarder
          </Link>
        </button>
       <div className=' lg:px-96 lg:ml-32 '> 
          <img src={PackitByddyLogo} alt="Our Logo"
          className=" active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]"/>
          </div>
        <div className='py-6 justify-center text-center relative text-2xl '>
                <SignInButton  forceRedirectUrl='/LandingPage' className='text-[#131a4b] hover:text-white animate-bounce shadow-sm'/>
                        </div>
                       </div>

          <div className=' grid grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-2'>

                <div className='bg-slate-100 border-gray-400 rounded-lg active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  '>
                <h1 class=" uppercase bg-[#131a4b] text-gray-400 py-2 px-2 hover:text-amber-100">
                Company OverView
                  </h1>
                  <p className='py-4 px-2 '>
                    Our platform connects users with realiable frieght forwarding services, offering seamless parcel pickup, delivery and tracking
                    soluions. Whether you are a student moving to a new city or a business
                    shipping products nationally. Pack It Buddy is your trusted partner for hassle-free shipping
                  </p>
                </div>
                <div className='bg-slate-100 border-gray-400 rounded-lg active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]'>
                <h1 class=" uppercase bg-[#131a4b] text-gray-400 py-2 px-2 hover:text-amber-100">
                Our Mission
                  </h1>
                  <p className='py-4 px-2 '>
                    At Pack It Buddy, Our Mission is to empoer individuals and businesses to ship their parcels with Ease
                    and confidence. We strive to provide innovative logistics solutions that
                    simplify the shipping process. enhance convenience, and exceed customer expectations.
                  </p>
                </div>
                <div className='bg-slate-100 border-gray-400 rounded-lg active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]'>
                  <h1 class=" uppercase bg-[#131a4b] text-gray-400 py-2 px-2 hover:text-amber-100">
                    Our Values
                  </h1>
                  <p className='py-4 px-2 justify-items-center text-center'>
                    <ul>
                      <li className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]'>
                      Customer-Centricity
                      </li>
                      <li className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]'>
                        Convenience
                      </li>
                      <li className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]'>
                        Reliability
                      </li>
                      <li className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]'>
                      Innovation
                      </li>
                      <li className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]'>
                        Intefrity
                      </li>
                      <li className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]'>
                        Sustainability
                      </li>
                    </ul>
                  </p>
                </div>
                </div>

    </div>
  )
}

export default Home