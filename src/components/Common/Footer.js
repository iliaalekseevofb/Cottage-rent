import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { ImLocation2 } from 'react-icons/im';
import { AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai';

const footerContent = [
  ['О базе отдыха', 'Проживание', 'Мероприятия'],
  ['Рыбалка', 'Дни рождения', 'Развлечения', 'Контакты'],
  ['Охота', 'Свадьбы', 'Цены']
]

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
      <div className='w-full py-8 bg-neutral-700 flex justify-center items-center'>
        <div className='w-full py-4 max-w-screen-xl'>
          <div className='flex justify-between items-start'>
            <div className='w-64 flex justify-between items-start'>
              <ImLocation2 className='text-orange-500' size={24}/>
              <p className='w-5/6 text-white font-serif'>Загородная база отдыха «Домик у Барта» расположена в одноименной живописной деревушке Краснокамского района Подмосковья на 127 километре Каширского шоссе.</p>
            </div>
            <div className='w-3/4 grid grid-cols-4 grid-rows-1 gap-6'>
              {footerContent.map((item, index) => (
                <div key={index} className='flex flex-col justify-start items-start'>
                  {item.map((innerItem, innerIndex) => (
                    <a className='text-white text-md font-serif pb-2 hover:text-orange-500 duration-200' key={innerIndex} href='/'>{innerItem}</a>
                  ))}
                </div>
              ))}
              <div>
                <h5 className='text-orange-500 pb-2'>Мы в соцсетях:</h5>
                <div className='w-16 flex justify-between items-center'>
                  <a href='/'>
                    <AiFillInstagram className='text-white hover:text-orange-500 duration-200' size={32} />
                  </a>
                  <a href='/'>
                    <AiFillTwitterSquare className='text-white hover:text-orange-500 duration-200' size={32} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Footer