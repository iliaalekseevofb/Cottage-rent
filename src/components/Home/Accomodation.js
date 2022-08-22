import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { amyHumphries1, amyHumphries2, andresMolina, andrewSpencer, clayBanks, coleAnkney, hansIsaacson1, hansIsaacson2, julianHochgesang, justinKauffman, loeweTechnology, samManns } from '../../assets';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const sliderImages = [
  [amyHumphries1, amyHumphries2, andresMolina],
  [andrewSpencer, clayBanks, coleAnkney],
  [hansIsaacson1, hansIsaacson2, julianHochgesang],
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
  let navigate = useNavigate();

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
    <div id='accomodation' className='w-full px-5 flex justify-center items-center xl:mt-12 pt-12 pb-16 bg-neutral-100'>
      <div className='w-full max-w-screen-2xl'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl lg:text-4xl font-sans pb-2'>Наши номера</h1>
          <p className='w-12 lg:w-20 border-t-4 border-green-600'></p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-rows-4 md:grid-rows-2 xl:grid-rows-1 gap-12 mt-8 sm:mt-12 lg:mt-16'>
          {sliderImages.map((item, index) => (
            <div key={index} className='h-[560px] bg-white shadow-lg hover:shadow-2xl duration-200 rounded-lg'>
              <div className='relative h-64 xl:h-56'>
                {item.map((image, innerIndex) => (
                  <div key={innerIndex} className={`${slideIndex[index] === innerIndex ? 'opacity-100' : 'opacity-0'} w-full h-full absolute transition-opacity ease-in-out duration-300`}>
                    <Link to={`room-${[index + 1].toString()}`}>
                      <img className='w-full h-full object-cover rounded-t-lg' src={image} alt='...'/>
                    </Link>
                  </div>
                ))}
                <button onClick={() => nextSlide(index)} className='w-[40px] rounded-tr-lg absolute z-20 flex justify-center items-center top-0 bottom-0 right-0 text-white cursor-pointer hover:bg-gradient-to-t hover:from-myGradient hover:to-myGradient'>
                  <IoIosArrowForward size={24} />
                </button>
                <button onClick={() => prevSlide(index)} className='w-[40px] rounded-tl-lg absolute z-20 flex justify-center items-center top-0 bottom-0 left-0 text-white cursor-pointer hover:bg-gradient-to-t hover:from-myGradient hover:to-myGradient'>
                  <IoIosArrowBack size={24} />
                </button>
              </div>
              <Link to={`room-${[index + 1].toString()}`}>
                <div className='w-full px-3 pt-5 pb-1 xl:p-3 cursor-pointer'>
                  <div className='w-full mb-3'>
                    <h2 className='text-2xl text-center'>{roomNames[index]}</h2>
                  </div>
                  <div className='w-full mb-3'>
                    <h4 className='text-xl text-center text-orange-600'>от {roomPrices[index]} руб.</h4>
                  </div>
                  <div className='w-full'>
                    <p className='text-md 2xl:text-lg text-center text-neutral-600'>{roomDescriptions[index]}</p>
                  </div>
                </div>
              </Link>
              <div className='w-full flex justify-center items-center'>
                <button onClick={() => {navigate(`room-${[index + 1].toString()}`, { replace: false })}} className='mt-3 py-3 px-6 rounded-md bg-green-600 hover:brightness-75 duration-200 text-xl xl:text-lg text-white'>
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accomodation