import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { birgitLoit, kennyTimmer1, matthewHarwood, simonWaelti, stephenWheeler, baileyAnselme, birgitLoit2, florisBronkhorst, minnaAutio, ostapSenyuk, vuAnh2 } from '../../assets';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const sources = [birgitLoit2, birgitLoit, baileyAnselme, minnaAutio, ostapSenyuk];
const headers = [
  'Отдых для всей семьи',
  'Черное море в 7 минутах',
  'Комфортные номера',
  'Магазины и кафе рядом',
  'Необыкновенная природа'
]
const texts = [
  'Приезжайте к нам всей семьей и проведите свой незабываемый отпуск! В наших номерах место найдется для каждого',
  'Забронируйте номер всего в нескольких минутах ходьбы от черного моря и не переживайте о том, как будете добираться',
  'В наших номерах вы сможете время в полном комфорте и насладиться пейзажами из окна',
  'Магазины и различные кафе находятся по всей округе. Вам даже не нужно далеко ездить',
  'Уже просто выглянув в окно, вы удивитесь завораживающей красоте южной природы, лиственных лесов и гор'
]

const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== sources.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sources.length) {
      setSlideIndex(1);
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(sources.length)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }

  return (
    <div className='w-full h-[220px] esm:h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[640px] relative overflow-hidden'>
      {sources.map((item, index) => {
        return (
          <div key={index}>
            <div className={`${slideIndex === index + 1 ? 'opacity-100' : 'opacity-0'} w-full h-full absolute z-10 transition-opacity ease-in-out duration-200`}>
              <img className = 'w-full h-full object-cover brightness-50' src={item} alt='...' />
            </div>
            <div className='absolute z-20 top-[16%] sm:top-[24%] lg:top-[20%] xl:top-[28%] left-[15%]'>
              <h1 className='text-white font-sans text-xl esm:text-2xl sm:text-3xl lg:text-5xl font-semibold'>{headers[slideIndex-1]}</h1>
              <h3 className='my-3 esm:my-5 lg:my-10 max-w-[260px] esm:max-w-[320px] sm:max-w-[480px] lg:max-w-[680px] text-white font-serif text-sm esm:text-md sm:text-xl lg:text-2xl'>{texts[slideIndex-1]}</h3>
              <button className='hidden esm:block w-28 esm:w-36 lg:w-48 h-10 esm:h-12 lg:h-16 text-white text-base esm:text-md lg:text-xl rounded-md bg-orange-400 hover:brightness-75 duration-200'>Подробнее</button>
            </div>
          </div>
        )
      })}
      <div className='absolute overflow-hidden hidden 2xl:block z-20 top-[10%] bottom-[10%] right-[15%] w-[360px] bg-white rounded-xl shadow-xl p-7'>
        <h1 className='text-3xl font-bold'>Закажите звонок</h1>
        <h3 className='text-xl font-serif mb-5 mt-8'>Оставьте заявку и мы перезвоним вам в течение 15 минут</h3>
        <input type='text' placeholder='* Имя:' className='w-full px-2 py-3 text-lg rounded-md border border-neutral-400 outline-1 outline-green-800 mb-3' />
        <input type='text' placeholder='* Телефон:' className='w-full px-2 py-3 text-lg rounded-md border border-neutral-400 outline-1 outline-green-800 ' />
        <p className='mt-5 mb-8'>Отправляя заявку, вы соглашаетесь с <Link className='text-green-600' to='/privacy-policy'>Политикой конфиденциальности</Link></p>
        <button className='bg-green-600 hover:brightness-75 duration-200 rounded-md text-white text-xl py-3 px-4'>Отправить</button>
      </div>
      <button onClick={nextSlide} className='w-[40px] sm:w-[60px] h-full absolute z-20 flex justify-center items-center text-white cursor-pointer top-0 bottom-0 right-0 hover:bg-gradient-to-t hover:from-myGradient hover:to-myGradient'>
        <IoIosArrowForward size={24} />
      </button>
      <button onClick={prevSlide} className='w-[40px] sm:w-[60px] h-full absolute z-20 flex justify-center items-center text-white cursor-pointer top-0 bottom-0 left-0 hover:bg-gradient-to-t hover:from-myGradient hover:to-myGradient'>
        <IoIosArrowBack size={24} />
      </button>
      <div className='absolute flex z-20 bottom-[10px] left-[50%] -translate-x-[50%]'>
        {Array.from({length: 5}).map((item, index) => (
          <div key={index} onClick={() => {moveDot(index + 1)}} className={slideIndex === index + 1 ? 'bg-white w-[15px] h-[15px] rounded-[50%] border-2 border-white mx-[5px] cursor-pointer' : 'w-[15px] h-[15px] rounded-[50%] border-2 border-white mx-[5px] cursor-pointer'}></div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider