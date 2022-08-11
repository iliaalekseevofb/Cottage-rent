import React from 'react';
import { Link } from 'react-router-dom';

const InfoBar = () => {
  return (
    <div className='w-full h-16 sm:h-20 xl:h-24 p-2 lg:p-3 flex justify-center items-center border-b border-neutral-200'>
      <div className='w-full h-full max-w-screen-2xl flex justify-between items-center'>
        <div className='flex justify-center items-start flex-col'>
          <h1 className='text-3xl leading-normal font-sans font-bold'>Домик "У Барта"</h1>
          <p className='text-xl leading-normal font-serif'>Живите в 7 минутах от моря</p>
        </div>
        <div>
          hello
        </div>
      </div>
    </div>
  )
}

export default InfoBar