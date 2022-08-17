import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { amyHumphries1, amyHumphries2, andresMolina, andrewSpencer, clayBanks, coleAnkney, hansIsaacson1, hansIsaacson2, julianHochgesang, justinKauffman, loeweTechnology, samManns } from '../../assets';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const sliderImages = [
  [amyHumphries2, amyHumphries1, andresMolina],
  [andrewSpencer, clayBanks, coleAnkney],
  [hansIsaacson2, hansIsaacson1, julianHochgesang],
  [justinKauffman, loeweTechnology, samManns]
];
const roomNames = ['Номер "Делюкс"', 'Номер "Стандарт"', 'Номер "Эконом"', 'Номер "Люкс"']
const roomPrices = [3290, 2590, 1990, 4790];
const roomDescriptions = [
  'В нашем распоряжении имеются как маленькие домики на компании из 1 человек, так и просторные коттеджи для больших семей или компаний',
  'В нашем распоряжении имеются как маленькие домики на компании из 2 человек, так и просторные коттеджи для больших семей или компаний',
  'В нашем распоряжении имеются как маленькие домики на компании из 3 человек, так и просторные коттеджи для больших семей или компаний',
  'В нашем распоряжении имеются как маленькие домики на компании из 4 человек, так и просторные коттеджи для больших семей или компаний'
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
    <div id='accomodation' className='w-full px-5 flex justify-center items-center mt-16 py-12 bg-neutral-100'>
      <div className='w-full max-w-screen-2xl'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl lg:text-4xl font-sans pb-2'>Наши номера</h1>
          <p className='w-12 lg:w-20 border-t-4 border-green-600'></p>
        </div>
        <div className='grid grid-cols-4 grid-rows-1 gap-12 mt-16'>
          {sliderImages.map((item, index) => (
            <div key={index} className='h-[600px] bg-white shadow-lg rounded-lg'>
              <div className='relative h-56'>
                {item.map((image, innerIndex) => (
                  <div className={`${slideIndex[index] === innerIndex ? 'opacity-100' : 'opacity-0'} w-full h-full absolute transition-opacity ease-in-out duration-300`}>
                    <img className='w-full h-full object-cover rounded-t-lg' src={image} alt='...'/>
                  </div>
                ))}
                <button onClick={() => nextSlide(index)} className='w-[40px] rounded-tr-lg absolute z-20 flex justify-center items-center top-0 bottom-0 right-0 text-white cursor-pointer hover:bg-gradient-to-t hover:from-myGradient hover:to-myGradient'>
                  <IoIosArrowForward size={24} />
                </button>
                <button onClick={() => prevSlide(index)} className='w-[40px] rounded-tl-lg absolute z-20 flex justify-center items-center top-0 bottom-0 left-0 text-white cursor-pointer hover:bg-gradient-to-t hover:from-myGradient hover:to-myGradient'>
                  <IoIosArrowBack size={24} />
                </button>
              </div>
              <div>
                {/* Names */}
              </div>
              <div>
                {/* Prices */}
              </div>
              <div>
                {/* Description */}
              </div>
              <div>
                {/* Button */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accomodation