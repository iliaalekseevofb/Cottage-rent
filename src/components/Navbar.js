import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full h-16 lg:h-20 p-2 lg:p-3 flex justify-center items-center bg-neutral-300'>
      <div className='w-full h-full p-2 max-w-screen-2xl bg-neutral-400 grid grid-cols-7 gap-4'>
        <div className='w-full h-full bg-neutral-500'></div>
        <div className='w-full h-full bg-neutral-500'></div>
        <div className='w-full h-full bg-neutral-500'></div>
        <div className='w-full h-full bg-neutral-500'></div>
        <div className='w-full h-full bg-neutral-500'></div>
        <div className='w-full h-full bg-neutral-500'></div>
        <div className='w-full h-full bg-neutral-500'></div>
      </div>
    </div>
  )
}

export default Navbar