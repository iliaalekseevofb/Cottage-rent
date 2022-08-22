import React from 'react';
import { Forest, Nature, RobinBird } from '../../assets';

const Discounts = () => {
  return (
    <div id='about' className='w-full px-5 flex justify-center items-center pt-4 sm:pt-8'>
      <div className='w-full h-[500px] flex justify-between items-center'>
        <div className='relative w-[500px] h-[500px]'>
          <img className='absolute left-0 bottom-0 w-full h-full' src={Forest} alt='forest' />
        </div>
        <div className='relative w-[500px] h-[500px]'>
          <img className='absolute right-0 bottom-0 w-full h-full' src={RobinBird} alt='nature' />
        </div>
      </div>
    </div>
  )
}

export default Discounts