import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImLocation2 } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import PopupForm from './PopupForm';

const navbarContent = [
  ['О нас', '#about'], 
  ['Проживание', '#accomodation'], 
  ['Галерея', '#gallery'], 
  ['Спецпредложения', '#discounts'], 
  ['Отзывы', '#testimonials'], 
  ['Расположение', '#location'], 
  ['Контакты', '#contacts']
]

const phoneNumbers = ['+ 7 (987) 65-43-210', '+ 7 (123) 45-67-890'];

const InfoBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [togglePopup, setTogglePopup] = useState(false);

  const menuRef = useRef();
  useEffect(() => {
    let menuHandler = (e) => {
      if (!menuRef.current.contains(e.target))
      setToggleMenu(false);
    };
    document.addEventListener('mousedown', menuHandler)
  });

  const DropdownMenu = () => {
    return (
      <div className={`absolute z-30 ${toggleMenu ? 'block' : 'hidden'} lg:hidden top-20 sm:top-24 right-0 left-0 bg-white`}>
        <a href='#contacts' onClick={() => {setToggleMenu(false)}} className='h-16 px-5 flex justify-start items-center border-b border-b-neutral-200'>
          <BsFillTelephoneFill size={24} className='text-green-700 mr-2'/>
          <div className='font-serif'>
            <p>{phoneNumbers[0]}</p>
            <p>{phoneNumbers[1]}</p>
          </div>
        </a>
        <div className='flex flex-col justify-center items-start text-xl font-serif bg-neutral-100'>
          {navbarContent.map((item, key) => (
            <a key={key} onClick={() => {setToggleMenu(false)}} href={item[1]} className='w-full h-16 px-5 flex justify-start items-center font-medium border-b border-neutral-200'>
              {item[0]}
            </a>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='w-full h-20 sm:h-24 xl:h-28 py-1 lg:py-3 px-5 flex justify-center items-center border-b border-neutral-200'>
      <div className='w-full h-full max-w-screen-2xl flex justify-between items-center'>
        {/* Logo */}
        <Link to='/'>
          <div className='flex justify-center items-start flex-col'>
            <h1 className='text-xl sm:text-3xl leading-normal font-sans font-bold'>Домик "У Барта"</h1>
            <p className='text-md sm:text-xl text-green-800 leading-normal font-serif'>Живите в 7 минутах от моря</p>
          </div>
        </Link>
        <div className='flex justify-end items-center'>
          {/* Location */}
          <div className='hidden xl:flex justify-end items-center mr-10'>
            <a href='#location'>
              <ImLocation2 size={36} className='text-green-800 mr-3' />
            </a>
            <div>
              <h3 className='text-xl font-sans'>Где мы находимся?</h3>
              <p className='font-serif text-neutral-500'>г. Севастополь, п. Мирный,<br />ул. Каскадная, дом 17</p>
            </div>
          </div>
          {/* Numbers */}
          <div className='hidden xl:flex justify-end items-center mr-10'>
            <a href='#contacts'>
              <BsFillTelephoneFill size={32} className='text-green-800 mr-3' />
            </a>
            <div>
              <h3 className='text-xl font-sans'>Как связаться?</h3>
              <p className='font-serif text-neutral-500'>{phoneNumbers[0]}</p>
              <p className='font-serif text-neutral-500'>{phoneNumbers[1]}</p>
            </div>
          </div>
          {/* Order call button */}
          <div className='hidden sm:flex justify-end items-center'>
            <button onClick={() => setTogglePopup(true)} className='px-4 py-3 rounded-md bg-green-600 hover:brightness-75 duration-200 font-serif text-xl font-bold text-white'>
              Заказать звонок
            </button>
          </div>
          <div ref={menuRef}>
            {/* Menu icon */}
            <button onClick={() => {setToggleMenu(!toggleMenu)}} className='flex lg:hidden justify-end items-center ml-5'>
              <FiMenu size={40} />
            </button>
            {/* Dropdown menu */}
            <DropdownMenu />
          </div>
        </div>
      </div>
      <PopupForm togglePopup={togglePopup} setTogglePopup={setTogglePopup} />
    </div>
  )
}

export default InfoBar