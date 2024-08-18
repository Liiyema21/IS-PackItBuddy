import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import PackitByddyLogo from '../assets/PLogo.png'

const ReferralPage = () => {
  const { referralCode } = useParams();

  return (
    <div className='bg-gradient-to-b from-slate-300 via-slate-200 to-slate-100 h-screen'>
        <div className='px-4'>
        <div className='px-48 lg:px-96 lg:ml-32'> 
          <img src={PackitByddyLogo} alt="Our Logo" 
          className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] text-3xl mb-12"/>
          </div>
        <div className='px-4'>
        <p className='text-2xl'>You were referred by {referralCode}.</p>
        </div>
        </div>
      <div className='ml-36 mt-6 '>
      <Link to='/' className='flex'>
      <p className='mr-2'>
      Click 
        </p>  
      <CiHome size={40} className='mt-2 text-[#131a4b] hover:text-white'/>
      <p className='ml-2'>
      to be redirected to our site 
        </p>
      </Link>
      </div>
    </div>
  );
};

export default ReferralPage;
