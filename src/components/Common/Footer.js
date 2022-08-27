import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='w-full px-5 bg-green-600 hidden lg:flex justify-center items-center'>
        <div className='w-full py-4 max-w-screen-xl flex justify-between items-center'>
          <h2 className='w-32 mr-4 font-serif text-white text-xl'>Остались вопросы?</h2>
          <div className='flex justify-between items-center'>
            <IoIosArrowForward className='text-green-200' size={64}/>
            <p className='min-w-32 font-serif text-white'>Подробно расскажем о базе отдыха, услугах, ценах и подготовим индивидуальное предложение! </p>
          </div>
          <button className='ml-4 py-3 w-44 border-2 border-white text-white rounded-md hover:bg-myBackground duration-200'>Задать вопрос</button>
        </div>
      </div>
      <div className='w-full h-[300px] bg-neutral-700'></div>
    </div>
  )
}

export default Footer