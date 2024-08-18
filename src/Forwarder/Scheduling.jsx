import React from 'react'
import ForwarderNav from './ForwarderComp/ForwarderNav'
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Scheduling = () => {
  return (
    <div>
        <ForwarderNav />
        Scheduling
        <Link to='/ForHomePage'>
        <CiHome  size={30} className='absolute right-0'/>
        </Link>
</div>
  )
}

export default Scheduling