import React from 'react';
import { Link } from 'react-router-dom';

const Accomodation = () => {
  return (
    <div id='accomodation' className='w-full px-5 flex justify-center items-center mt-16 py-8 bg-neutral-100'>
      <div className='w-full max-w-screen-2xl'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl lg:text-4xl font-sans pb-2'>Наши номера</h1>
          <p className='w-12 lg:w-20 border-t-4 border-green-600'></p>
        </div>
        <div className='mt-12'>
          <Link to='/room-1'>Room 1</Link>
          <Link to='/room-2'>Room 2</Link>
          <Link to='/room-3'>Room 3</Link>
          <Link to='/room-4'>Room 4</Link>
        </div>
      </div>
    </div>
  )
}

export default Accomodation