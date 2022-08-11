import React from 'react';

const Navbar = () => {
  const navbarContent = ['О нас', 'Проживание', 'Галерея', 'Спецпредложения', 'Отзывы', 'Расположение', 'Контакты']

  return (
    <div className='w-full h-16 py-1 px-3 lg:py-3 lg:px-5 hidden lg:flex justify-center items-center shadow-lg'>
      <div className='w-full h-full p-1 max-w-screen-2xl flex justify-between items-center'>
        {navbarContent.map((item, key) => (
          <div key={key} className='flex justify-center items-center'>
            <p className='text-lg font-serif font-semibold hover:text-green-600 duration-100 cursor-pointer'>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar