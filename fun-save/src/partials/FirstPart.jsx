import React from 'react'

const FirstPart = () => {
  
    return (
   <div className="relative w-full h-[80vh] flex items-center justify-center bg-[#00A79D]">
      <div 
        className="absolute w-full h-full bg-center bg-repeat brightness-70" 
        style={{ backgroundImage: 'url(first.jpg)', backgroundSize: '700px' ,
        backgroundColor: '#00A79D',
        backgroundBlendMode: 'overlay',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        filter: 'brightness(50%)' }}
      ></div>


      <div className="relative flex items-center mx-20 h-[80vh]">
        <div className='w-3/5 flex flex-col'>
            <div>
        <h1 className="text-white font-bold text-4xl mb-20">
          Choose Your Membership & Start Saving
        </h1>
        <p className="text-white text-xl mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut perferendis perspiciatis ea dolorum numquam omnis suscipit, voluptatibus non possimus natus debitis nisi soluta quia commodi adipisci dolores reiciendis. Officiis.
        </p>
        </div>
        <div className='flex flex-row mt-20 gap-2'>
            <img src='/Premium.png' className='w-[200px] h-[140px]'/>
            <img src='/Gold.png' className='w-[200px] h-[140px] size-10'/>
            <img src='Basic.png' className='w-[200px] h-[140px] size-10'/>
        </div>
        </div>
        <div className='w-2/5'>
            <img src='/kadin.png' className='h-[590px] w-[500px]'/>
        </div>
      </div>
    </div>
  )
}

export default FirstPart
