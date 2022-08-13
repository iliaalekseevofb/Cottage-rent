import React, { useState } from 'react';
import { kennyTimmer1, kennyTimmer2, matthewHarwood, simonWaelti, stephenWheeler } from '../../assets';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const sources = [stephenWheeler, kennyTimmer1, kennyTimmer2, matthewHarwood, simonWaelti];
const headers = [
  'Отдых для всей семьи',
  'Черное море в 7 минутах ходьбы',
  'Комфортные номера',
  'Магазины и кафе в двух шагах',
  'Необыкновенная природа вокруг'
]
const texts = [
  'Приезжайте к нам всей семьей и проведите свой незабываемый отпуск! В наших номерах место найдется для каждого',
  'Забронируйте номер всего в 7 минутах ходьбы от черного моря и не переживайте о том, как будете добираться',
  'В наших номерах вы сможете время в полном комфорте и насладиться пейзажами из окна',
  'Магазины и различные кафе находятся по всей округе, так что вам даже не нужно далеко ездить',
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
    <div className='w-full h-[30vh] sm:h-[40vh] lg:h-[440px] xl:h-[580px] relative overflow-hidden border-b-4 border-green-700'>
      {sources.map((item, index) => {
        return (
          <div key={index}>
            <div className={`${slideIndex === index + 1 ? 'opacity-100' : 'opacity-0'} w-full h-full absolute z-10 transition-opacity ease-in-out duration-300`}>
              <img className = 'w-full h-full object-cover brightness-50' src={item} alt='...' />
            </div>
            <h1 className='absolute z-20 top-[25%] left-[15%] text-white font-sans text-5xl font-semibold'>{headers[slideIndex-1]}</h1>
            <h3 className='absolute z-20 top-[40%] left-[15%] w-[580px] text-white font-serif text-2xl'>{texts[slideIndex-1]}</h3>
          </div>
        )
      })}
      <button className='absolute z-20 top-[65%] left-[15%] w-48 h-16 text-white text-xl rounded-md bg-orange-400 hover:bg-orange-500 duration-200'>Подробнее</button>
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