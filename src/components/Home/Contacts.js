import React from 'react';
import { ImLocation2 } from 'react-icons/im';
import { FaEnvelope } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contacts = () => {
  return (
    <div id='contacts' className='w-full px-5 flex justify-center items-center py-6 md:py-8 lg:py-10 xl:py-12'>
      <div className='w-full max-w-screen-2xl'>
        <div className='flex flex-col items-center mb-12'>
          <h1 className='text-3xl lg:text-4xl font-sans pb-2'>Контакты</h1>
          <p className='w-12 lg:w-20 border-t-4 border-orange-500'></p>
        </div>
        <div className='grid grid-cols-3 grid-rows-1'>
          <div className='flex flex-col justify-center items-center'>
            <div className='mb-8'>
              <h2 className='text-xl font-semibold pb-2'>Проезд на автомобиле</h2>
              <p className='text-lg font-serif'>Из Москвы по Каширскому шоссе (трасса М9) проезжая город Краснокамск на Фроловскую. После Краснокамска, примерно через 30 км, поворот налево по указателю "п. Мирный", далее  через 2 км въезд на базу отдыха.</p>
            </div>
            <div>
              <h2 className='text-xl font-semibold pb-2'>Проезд своим ходом</h2>
              <p className='text-lg font-serif'>От ст. м. Каширская до г. Краснокамск автобусом или маршруткой, далее любым местным автобусом в направлении на Фроловскую до остановки — «п. Мирный» или электричкой от ст. Каширская в направлении Фроловской до ст. "п. Мирный" далее 2 км пешком.</p>
            </div>
          </div>
          <div className=''>
            <div className='w-full flex justify-start items-start mb-6'>
              <div className='w-20 h-20 mr-6 bg-green-600 rounded-full flex justify-center items-center'>
                <ImLocation2 className='text-white' size={32} />
              </div>
              <div className='w-2/3'>
                <h2 className='text-xl font-semibold pb-2'>Адрес</h2>
                <p className='font-serif text-neutral-500'>Загородная база отдыха «Домик у Барта» расположена в живописном поселке "Мирный" на 101-ом километре Каширского шоссе.	</p>
              </div>
            </div>
            <div className='w-full flex justify-start items-start'>
              <div className='w-20 h-20 mr-6 bg-green-600 rounded-full flex justify-center items-center'>
                <FaEnvelope className='text-white' size={32} />
              </div>
              <div className='w-2/3'>
                <h2 className='text-xl font-semibold pb-2'>E-mail</h2>
                <p className='font-serif text-neutral-500'>support@domik-u-barta</p>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-start items-start'>
            <div className='w-20 h-20 mr-6 bg-green-600 rounded-full flex justify-center items-center'>
              <BsFillTelephoneFill className='text-white' size={32} />
            </div>
            <div>
              <h2 className='text-xl font-semibold pb-2'>Телефоны</h2>
              <p className='font-serif text-neutral-500'>+ 7 (987) 654-32-10</p>
              <p className='font-serif text-neutral-500'>+ 7 (123) 456-78-90</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts