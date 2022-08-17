import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { amyHumphries1, amyHumphries2, andresMolina, andrewSpencer, clayBanks, coleAnkney, hansIsaacson1, hansIsaacson2, julianHochgesang, justinKauffman, loeweTechnology, samManns } from '../../assets';

const sliderImages = [
  [amyHumphries1, amyHumphries2, andresMolina],
  [andrewSpencer, clayBanks, coleAnkney],
  [hansIsaacson1, hansIsaacson2, julianHochgesang],
  [justinKauffman, loeweTechnology, samManns]
]

const Accomodation = () => {
  const [slideIndex, setSlideIndex] = useState({0: 0, 1: 0, 2: 0, 3: 0});

  const nextSlide = (index) => {
    if (slideIndex[index] !== 2) {
      setSlideIndex({...slideIndex, [index]: slideIndex[index] + 1});
    } else if (slideIndex[index] === 2) {
      setSlideIndex({...slideIndex, [index]: 0});
    }
  }

  const prevSlide = (index) => {
    if (slideIndex[index] !== 0) {
      setSlideIndex({...slideIndex, [index]: slideIndex[index] - 1})
    } else if (slideIndex[index] === 0) {
      setSlideIndex({...slideIndex, [index]: 2})
    }
  }

  return (
    <div id='accomodation' className='w-full px-5 flex justify-center items-center mt-16 py-8 bg-neutral-100'>
      <div className='w-full max-w-screen-2xl'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl lg:text-4xl font-sans pb-2'>Наши номера</h1>
          <p className='w-12 lg:w-20 border-t-4 border-green-600'></p>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 gap-8'>
          {sliderImages.map((item, index) => (
            <div key={index} className='h-[400px] bg-white shadow-lg rounded-lg'>
              hello
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accomodation