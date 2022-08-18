import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { amyHumphries1, amyHumphries2, andresMolina, andrewSpencer, clayBanks, coleAnkney, hansIsaacson1, hansIsaacson2, julianHochgesang, justinKauffman, loeweTechnology, samManns } from '../assets';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaSmileBeam, FaBed, FaCouch, FaShower } from 'react-icons/fa';

const roomInfo = [
  ['1', [amyHumphries1, amyHumphries2, andresMolina], 'Номер "Делюкс"', 3290],
  ['2', [andrewSpencer, clayBanks, coleAnkney], 'Номер "Стандарт"', 2590],
  ['3', [hansIsaacson1, hansIsaacson2, julianHochgesang], 'Номер "Эконом"', 1990],
  ['4', [justinKauffman, loeweTechnology, samManns], 'Номер "Люкс"', 4790]
]

const RoomDetails = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex !== 2) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === 2) {
      setSlideIndex(0);
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 0) {
      setSlideIndex(2)
    }
  }

  const {id} = useParams();

  return (
    <div>
      {roomInfo.map((item, itemIndex) => {
          return (id === item[0] &&
            <div key={itemIndex} className='w-full px-5 flex justify-center items-center pt-8 lg:pt-12 bg-neutral-100'>
              <div className='w-full max-w-screen-2xl'>
                <div className='w-full mb-8'>
                  <h1 className='text-3xl font-serif font-semibold border-l-[6px] border-green-600 pl-3'>{roomInfo[itemIndex][2]}</h1>
                </div>
                <div className='w-full flex justify-between items-start mb-10'>
                  <div className='w-2/3 h-[560px]'>
                    <div className='w-full h-full relative'>
                      {item[1].map((image, imageIndex) => (
                        <div key={imageIndex}>
                          <div className={`${slideIndex === imageIndex ? 'opacity-100' : 'opacity-0'} w-full h-full absolute z-10 transition-opacity ease-in-out duration-200`}>
                            <img className = 'w-full h-full object-cover' src={image} alt='...' />
                          </div>
                        </div>
                      ))}
                      <button onClick={nextSlide} className='w-[40px] sm:w-[60px] h-full absolute z-20 flex justify-center items-center text-white cursor-pointer top-0 bottom-0 right-0 hover:bg-gradient-to-t hover:from-myGradient hover:to-myGradient'>
                        <IoIosArrowForward size={24} />
                      </button>
                      <button onClick={prevSlide} className='w-[40px] sm:w-[60px] h-full absolute z-20 flex justify-center items-center text-white cursor-pointer top-0 bottom-0 left-0 hover:bg-gradient-to-t hover:from-myGradient hover:to-myGradient'>
                        <IoIosArrowBack size={24} />
                      </button>
                    </div>
                  </div>
                  <div className='w-1/3 h-[560px] ml-10 p-8 bg-white rounded-lg shadow-lg'>
                    <div className='flex justify-start items-end pb-6 border-b border-neutral-300'>
                      <h3 className='text-5xl text-orange-600 font-bold mr-2'>{roomInfo[itemIndex][3]}</h3>
                      <p className='text-2xl'>руб. за сутки</p>
                    </div>  
                    <p className='mt-6 text-lg font-serif pb-6 border-b border-neutral-300'>Эти Аппартаменты расположены на третьем этаже гостиничного здания и рассчитаны на два человека (+ 2 доп. места ). В аппартаментах: спальня с двухспальной кроватью и гостинная комната с двухспальным раскладным диваном, ТВ, кухня и постельное белье. Один саузел с душевой комнатой. Рядом с гостиницей расположена зона барбекю общего пользования со столиками и зоной отдыха.</p>
                    <div className='w-full mt-8 flex justify-between items-center'>
                      <button className='mr-3 w-1/2 py-4 text-white text-xl rounded-md bg-green-600 hover:brightness-75 duration-200'>Оставить заявку</button>
                      <button className='ml-3 w-1/2 py-4 text-green-600 text-xl rounded-md bg-white border-2 border-green-600 hover:brightness-75 duration-200'>Подробнее</button>
                    </div>
                  </div>
                </div>
                <div className='w-full h-[500px] bg-white rounded-lg shadow-lg'>
                  <div>
                    {/* Precise desription */}
                  </div>
                  <div>
                    {/* Characteristics */}
                  </div>
                </div>
              </div>
            </div>
          )
      })}
    </div>
  )
}

export default RoomDetails