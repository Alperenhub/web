import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";


const Footer = ({text}) => {
  return (
    <div className="relative flex items-center mx-24 h-[30vh] ">
       
    <div className='w-3/4'>
        <div>
    
    <p className="text-black text-lg font-poppins">
        <span className='mr-5'>About Us</span>
        <span className='mx-5'>Terms of use</span>
        <span className='mx-5'>Privacy Policy</span> 
        <span className='mx-5'>Contact</span>
    </p>
    <div className='flex flex-row mt-8 gap-10'>
        <p className='font-poppins text-lg'>{text}
        </p>
    </div>
    </div>
    </div>

    <div className='w-1/4 flex flex-row justify-center gap-3'>
        <FaYoutube className='bg-[#00A79D] text-[#ffffff] rounded-full size-12 p-3' />
        <FaInstagram className='bg-[#00A79D] text-[#ffffff] rounded-full size-12 p-3'/>
        <FaTwitter className='bg-[#00A79D] text-[#ffffff] rounded-full size-12 p-3'/>
        <FaFacebookF className='bg-[#00A79D] text-[#ffffff] rounded-full size-12 p-3'/>
    </div>
  </div>
  )
}

export default Footer
