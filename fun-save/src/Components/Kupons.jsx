import React from 'react'

const Kupons = () => {
  return (
    <div className='flex flex-col ml-36 mt-12'>
        <div className='flex flex-row '>
        <h1 className='font-bold'>Coupons Available -</h1>
        <p>Diamond Members</p>
        </div>
    <div className='flex flex-row gap-8 mt-12 ml-4'>
      <div>
      <img src='/diamonduse.png'/>
      </div>
      <div>
      <img src='/diamond.png'/>
      </div>
      <div>
      <img src='/diamond.png'/>
      </div>

    </div>
    </div>
  )
}

export default Kupons
