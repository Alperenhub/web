import React from 'react'

const SecondPart = () => {
  
    return (
   <div className="relative w-full h-[80vh] flex items-center justify-center bg-[#00A79D]">
      <div 
        className="absolute w-full h-full bg-center bg-repeat brightness-70" 
        style={{ backgroundImage: 'url(first.jpg)', backgroundSize: '700px' ,
        backgroundColor: '#004DA7',
        backgroundBlendMode: 'overlay',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        filter: 'brightness(50%)' }}
      ></div>


      <div className="relative flex items-center mx-20 h-[80vh]">
        <div className='w-1/2 flex flex-col'>
            <div>
        <h1 className="text-white font-bold text-4xl mb-20">
            How Does it Work?
        </h1>
        <p className="text-white text-xl mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut perferendis perspiciatis ea dolorum numquam omnis suscipit, voluptatibus non possimus natus debitis nisi soluta quia commodi adipisci dolores reiciendis. Officiis.
        </p>
        </div>
        </div>
        <div className='w-1/2'>
            <img src='/video.png' className='size-11/12'/>
        </div>
      </div>
    </div>
  )
}

export default SecondPart
