import React from 'react';
import { christopherCampbell, ethanHoover, karlMagnuson, warrenWong } from '../../assets';
import { FcGoogle } from 'react-icons/fc';
import { AiFillStar } from 'react-icons/ai';

const testimonialsContent = [
  [warrenWong, 'Dmitriy Rubtsov', '22.07.2020', 'Жили тут с семьей три недели. Все понравилось. До моря буквально рукой подать, да и магазины рядом совсем. Номера комфортные и просторные, хозяева очень доброжелательные и всегда помогут, если что'],
  [ethanHoover, 'hey1981', '08.06.2021', 'Хотели отдохнуть недельку на море и наткнулись на этот вариант. Были очень удивлены приятными ценами и расположением, так что недолго думая забронировали. По итогу все понравилось и планируем приехать в следующем году'],
  [christopherCampbell, 'Оля Бородина', '30.06.2020', 'Магазины и кафе очень близко, до моря топать буквально несколько минут, номера крутые. Все супер!!!'],
  [karlMagnuson, 'Polina', '14.09.2021', 'Не ожидали найти такой хороший вариант по столь хорошей цене, поэтому сначала были настроены скептически, но все прошло просто отлично, будем бронировать на следующий год :)']
]

const Testimonials = () => {
  return (
    <div id='testimonials' className='w-full px-5 flex justify-center items-center py-6 md:py-8 lg:py-10 xl:py-12 bg-neutral-100'>
      <div className='w-full max-w-screen-2xl'>
        <div className='flex flex-col justify-center items-center mb-20'>
          <h1 className='text-3xl lg:text-4xl font-sans pb-2'>Отзывы о нас</h1>
          <p className='w-12 lg:w-20 border-t-4 border-green-600'></p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 grid-rows-1 sm:grid-rows-2 xl:grid-rows-1 gap-6'>
          {testimonialsContent.map((item, index) => (
            <div key={index} className={`${(index === 0 || index === 1) && 'sm:mb-12 xl:mb-0'} mb-12 last:mb-0 sm:mb-0 px-4 bg-white rounded-md border-[3px] border-neutral-300 flex flex-col justify-start items-center`}>
              <div className='w-24 h-24 -mt-12 rounded-full overflow-hidden mb-4'>
                <img className='w-full h-full object-cover' src={item[0]} alt={item[1]} />
                <FcGoogle className='bg-white p-1 rounded-full absolute -mt-8 -ml-2' size={40} />
              </div>
              <h3 className='text-xl font-serif font-medium'>{item[1]}</h3>
              <h5 className='text-lg font-serif text-neutral-400 mb-2'>{item[2]}</h5>
              <div className='flex items-center mb-4'>
                {Array.from({length: 5}).map((item, starIndex) => (
                  <span key={starIndex}>
                    <AiFillStar className='text-yellow-400' size={28} />
                  </span>
                ))}
              </div>
              <p className='text-center text-lg font-serif mb-4'>{item[3]}</p>
            </div>
          ))}
        </div>
      </div> 
    </div>
  )
}

export default Testimonials