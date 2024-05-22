import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { MdCreditCard } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";



const Header = () => {
  return (
    <div className='w-full h-[90px] bg-[#ffffff] flex justify-center items-center z-10 fixed shadow-lg'>
      <div className='flex justify-between w-[80%]'>
      <div>
      <img className='w-[151px] h-[53px]' src='/logo.png' alt='logo'/>
      </div>

      <div className='flex items-center bg-white rounded-b-xl justify-center '>
      <div className='bg-[#00A79D] w-[190px] h-[40px] flex items-center p-5 space-x-3 rounded-lg shadow-md'>
          <AiFillHome className="text-[#ffffff] size-6 border-b-2"/>
          <MdCreditCard className="text-[#ffffff] size-6 "/>
          <IoMdHeart className="text-[#ffffff] size-6"/>
          <IoSearch className="text-[#ffffff] size-6"/>

      </div>

      <div className='bg-[#00A79D] h-[60px] w-[60px] rounded-full shadow-lg flex items-center justify-center z-10 ml-[-25px] '>
        <FaUserAlt className='rounded-full p-2 size-12 border-dashed border-white border text-[#ffffff]'/>
      </div>
      </div>
        
      </div>
    </div>
  )
}

export default Header
