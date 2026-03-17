import React from 'react'
import { MdCastForEducation } from "react-icons/md";
import { SiOpenaccess } from "react-icons/si";
import { FaSackDollar } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";


function Logos() {
  return (
    <div className='w-screen min-h-22.5 flex items-center justify-center flex-wrap gap-4 md:mb-12.5'>
        <div className='flex items-center justify-center gap-2 px-5 py-3 rounded-3xl bg-gray-200 cursor-pointer text-[#03394b]'><MdCastForEducation className='w-8.75 h-8.75 fill-[#03394b]'/>20k+ Online Courses</div>
        <div className='flex items-center justify-center gap-2 px-5 py-3 rounded-3xl bg-gray-200 cursor-pointer text-[#03394b]'><SiOpenaccess  className='w-8.75 h-8.75 fill-[#03394b]'/>LifeTime Access</div>
        <div className='flex items-center justify-center gap-2 px-5 py-3 rounded-3xl bg-gray-200 cursor-pointer text-[#03394b]'><FaSackDollar className='w-8.75 h-8.75 fill-[#03394b]'/>Value For Money</div>
        <div className='flex items-center justify-center gap-2 px-5 py-3 rounded-3xl bg-gray-200 cursor-pointer text-[#03394b]'><BiSupport className='w-8.75 h-8.75 fill-[#03394b]'/>LifeTime Support</div>
        <div className='flex items-center justify-center gap-2 px-5 py-3 rounded-3xl bg-gray-200 cursor-pointer text-[#03394b]'><FaUsers className='w-8.75 h-8.75 fill-[#03394b]'/>Community Support</div>
      
    </div>
  )
}

export default Logos
