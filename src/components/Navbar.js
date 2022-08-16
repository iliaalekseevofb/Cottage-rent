import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const navbarContent = [
  ['О нас', '#about'], 
  ['Проживание', '#accomodation'], 
  ['Галерея', '#gallery'], 
  ['Спецпредложения', '#discounts'], 
  ['Отзывы', '#testimonials'], 
  ['Расположение', '#location'], 
  ['Контакты', '#contacts'],
]

const Navbar = () => {
  return (
    <div className='w-full h-16 py-1 lg:py-3 px-5 hidden lg:flex justify-center items-center shadow-lg'>
      <div className='w-full h-full p-1 max-w-screen-2xl flex justify-between items-center'>
        {navbarContent.map((item, key) => (
          <div key={key} className='flex justify-center items-center'>
            <Link smooth to={'/' + item[1]} className='text-lg font-serif font-semibold hover:text-orange-400 duration-100 cursor-pointer'>
              {item[0]}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar