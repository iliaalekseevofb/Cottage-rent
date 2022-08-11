import React from 'react';
import { Link } from 'react-router-dom';
import { ImLocation2 } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';

const navbarContent = [
  ['О нас', '#about'], 
  ['Проживание', '#accomodation'], 
  ['Галерея', '#gallery'], 
  ['Спецпредложения', '#discounts'], 
  ['Отзывы', '#testimonials'], 
  ['Расположение', '#location'], 
  ['Контакты', '#contacts']
]

const InfoBar = () => {
  return (
    <div className='w-full h-20 sm:h-24 xl:h-28 py-1 lg:py-3 px-5 flex justify-center items-center border-b border-neutral-200'>
      <div className='w-full h-full max-w-screen-2xl flex justify-between items-center'>
        {/* Logo */}
        <Link to='/'>
          <div className='flex justify-center items-start flex-col'>
            <h1 className='text-xl sm:text-3xl text-green-900 leading-normal font-sans font-bold'>Домик "У Барта"</h1>
            <p className='text-md sm:text-xl leading-normal font-serif'>Живите в 7 минутах от моря</p>
          </div>
        </Link>
        <div className='flex justify-end items-center'>
          {/* Location */}
          <div className='hidden xl:flex justify-end items-center mr-10'>
            <a href='#location'>
              <ImLocation2 size={36} className='text-green-700 mr-3' />
            </a>
            <div>
              <h3 className='text-xl font-sans'>Где мы находимся?</h3>
              <p className='font-serif text-neutral-500'>г. Севастополь, п. Мирный,<br />ул. Каскадная, дом 17</p>
            </div>
          </div>
          {/* Numbers */}
          <div className='hidden xl:flex justify-end items-center mr-10'>
            <a href='#contacts'>
              <BsFillTelephoneFill size={32} className='text-green-700 mr-3' />
            </a>
            <div>
              <h3 className='text-xl font-sans'>Как связаться?</h3>
              <p className='font-serif text-neutral-500'>+ 7 (987) 65-43-210</p>
              <p className='font-serif text-neutral-500'>+ 7 (123) 45-67-890</p>
            </div>
          </div>
          {/* Order call button */}
          <div className='hidden sm:flex justify-end items-center'>
            <button className='px-4 py-3 rounded-2xl bg-green-600 hover:bg-green-700 duration-200 font-serif text-xl font-bold text-white'>
              Заказать звонок
            </button>
          </div>
          {/* Menu icon */}
          <div className='flex lg:hidden justify-end items-center ml-5'>
            <FiMenu size={40} />
          </div>
          {/* Menu */}
          <div className='w-full absolute top-20 sm:top-24 lg:hidden '>
            <p>Hellllooo</p>
            <p>Hellllooo</p>
            <p>Hellllooo</p>
            <p>Hellllooo</p>
            <p>Hellllooo</p>
            <p>Hellllooo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoBar