import React from 'react';
import { Link } from 'react-router-dom';
import { ImLocation2 } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';

const InfoBar = () => {
  return (
    <div className='w-full h-20 sm:h-24 xl:h-28 py-1 px-3 lg:py-3 lg:px-5 flex justify-center items-center border-b border-neutral-200'>
      <div className='w-full h-full max-w-screen-2xl flex justify-between items-center'>
        <div className='flex justify-center items-start flex-col'>
          <h1 className='text-xl sm:text-3xl text-green-900 leading-normal font-sans font-bold'>Домик "У Барта"</h1>
          <p className='text-md sm:text-xl leading-normal font-serif'>Живите в 7 минутах от моря</p>
        </div>
        <div className='flex justify-end items-center sm:grid sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-0'>
          <div className='flex justify-end items-center'>
            <ImLocation2 size={36} className='hidden sm:block text-green-600 mr-3' />
            <div className='hidden lg:block'>
              <h3 className='text-xl font-sans'>Где мы находимся?</h3>
              <p className='font-serif text-neutral-500'>г. Севастополь, п. Мирный,<br />ул. Каскадная, дом 17</p>
            </div>
          </div>
          <div className='flex justify-end items-center'>
            <BsFillTelephoneFill size={32} className='hidden sm:block text-green-600 mr-3' />
            <div className='hidden lg:block'>
              <h3 className='text-xl font-sans'>Как связаться?</h3>
              <p className='font-serif text-neutral-500'>+ 7 (987) 65-43-210</p>
              <p className='font-serif text-neutral-500'>+ 7 (123) 45-67-890</p>
            </div>
          </div>
          <div className='hidden xl:flex justify-end items-center'>
            <button className='px-4 py-3 rounded-2xl bg-green-600 hover:bg-green-700 duration-200 font-serif text-xl font-bold text-white'>
              Заказать звонок
            </button>
          </div>
          <div className='flex lg:hidden justify-end items-center'>
            <FiMenu size={40} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoBar