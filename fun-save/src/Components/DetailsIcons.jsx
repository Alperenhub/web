import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { GiWireframeGlobe } from "react-icons/gi";


const DetailsIcons = ({adres,phone,web}) => {
  return (
    <div className='w-[80%] ml-56 flex flex-row'>
    <div className='flex-1 flex flex-row '><FaLocationDot className='text-[#00A79D] size-8 '/>
    <h1 className='underline flex flex-row'><p className='font-bold'>Adress:  </p>
    <p> {adres}</p>
    </h1>
    </div>
    <div className='flex-1 flex flex-row ml-2'><FaPhoneVolume className='text-[#00A79D] mr-2 size-8'/>
    <h1 className='underline flex flex-row'><p className='font-bold'>Phone:  </p>
    <p> {phone}</p>
    </h1>
    </div>
    <div className='flex-1 flex flex-row ml-2'><GiWireframeGlobe className='text-[#00A79D] mr-2 size-8'/>
    <h1 className='flex flex-row'><p className='font-bold'>Web:  </p>
    <p> {web}</p>
    </h1>
    </div>          
    </div>
  )
}

export default DetailsIcons
