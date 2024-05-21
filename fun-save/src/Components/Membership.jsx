import React from 'react';

const Membership = ({ bg, width = '245px', height = '124px', member }) => {


  return (
    <div 
      className="flex-col rounded-xl flex p-4 shadow-lg"
      style={{ backgroundColor: bg, width:width, height:height }}
    >
      <h2 className='ml-3 font-poppins text-start text-3xl text-white'> 
        {member} 
      </h2>
      <h3 className='ml-3 font-poppins text-2xl text-white'>
        Membership
      </h3>
    </div>
  );
}

export default Membership;
