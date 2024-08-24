import React from 'react'
import { Link } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';


const LogInFormClient = () => {  
  return (
    <div className='bg-gray-300 h-full w-screen '>
        <div className='w-8/12 px-10 py-8 lg:w-4/12 mx-auto  h-full md:flex-row
rounded-2xl bg-gray-200 border-2 border-gray-200'>
                <button>
              <Link to="/">
                <IoArrowBack size={30}/>
              </Link>
            </button>

      <div className="text-3xl font-semibold mt-4 text-[#131a4b] ml-20">
      <h1 > Create new Account</h1>

      </div>
    <div className="mt-4 ml-10 text-md">

        <div>
            <label className=" font-medium text-gray-500">Name</label>
            <input className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent "
            placeholder='Full Name' required
            />
        </div>
        <div>
        <label className=" font-medium text-gray-500">Email</label>
            <input className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent "
            placeholder='Email address' required
            />
        </div>
        <div>
            <label className=" font-medium text-gray-500">Mobile Number</label>
            <input className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent "
            placeholder='Phone' required
            />
        </div>
        <div>
            <label className=" font-medium text-gray-500">Address</label>
            <input className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent "
            placeholder='Physical Address' required
            />
        </div>
        <div>
            <label className=" font-medium text-gray-500">Password</label>
            <input className="w-full border-2 border-gray-300 rounded-xl p-4 mt-1 bg-transparent "
            placeholder='Passowrd' required
            />
        </div>

        <div className="mt-4 flex flex-col gap-y-4">
            <button className="rounded-lg active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-2 bg-[#131a4b] text-white text-lg font-bold">
                  <Link to='/LandingPage'>
                  Sign In
                  </Link>

            </button>
        </div>
        <div className="mt-8 flex justify-center items-center">
        <p className="font-medium text-base text-gray-500"> Already have an account? </p>
        <button className="text-amber-500 text-base font-medium ml-2">
            Log In
        </button>

        </div>
    </div>
    </div>
    </div>
  )
}

export default LogInFormClient