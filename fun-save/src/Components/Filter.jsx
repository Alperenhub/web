import React from 'react'
import { GiKnifeFork } from "react-icons/gi";
import { MdPhotoCamera } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { FaHandHoldingHeart } from "react-icons/fa";



const Filter = () => {
  return (

    <div className='flex items-center  gap-2'>
        <div className='flex flex-row items-center justify-center px-6 '>
        <GiKnifeFork className='text-[#cccccc] text-4xl '/> 
        <p className='text-[#000000] text-xl border-r-4 pl-2 pr-10 font-bold'>Dining</p>
        
        <div className='mx-10 flex flex-row items-center'>
        <MdPhotoCamera className='text-[#cccccc] text-5xl'/> 
        <p className='text-[#000000] text-xl border-r-4 pl-2 pr-10 font-bold'>Attractions</p>
        </div>

        <div className='mx-10 flex flex-row items-center'>
        <AiOutlineShopping className='text-[#cccccc] text-5xl'/> 
        <p className='text-[#cccccc] text-xl border-r-4 pl-2 pr-10 font-bold'>Shopping</p>
        </div>

        <div className='mx-10 flex flex-row items-center'>
        <FaHandHoldingHeart className='text-[#cccccc] text-5xl'/> 
        <p className='text-[#cccccc] text-xl pl-2 pr-10 font-bold'>Health</p>
        </div>


        </div>
    </div>
  )
}

export default Filter
