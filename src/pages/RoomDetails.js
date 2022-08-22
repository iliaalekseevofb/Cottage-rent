import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { amyHumphries1, amyHumphries2, andresMolina, andrewSpencer, clayBanks, coleAnkney, hansIsaacson1, hansIsaacson2, julianHochgesang, justinKauffman, loeweTechnology, samManns } from '../assets';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaSmileBeam, FaBed, FaCouch, FaShower, FaInfoCircle } from 'react-icons/fa';

const roomInfo = [
  ['1', [amyHumphries1, amyHumphries2, andresMolina], 'Номер "Делюкс"', 3290],
  ['2', [andrewSpencer, clayBanks, coleAnkney], 'Номер "Стандарт"', 2590],
  ['3', [hansIsaacson1, hansIsaacson2, julianHochgesang], 'Номер "Эконом"', 1990],
  ['4', [justinKauffman, loeweTechnology, samManns], 'Номер "Люкс"', 4790]
]

const characteristicsContent = [
  [<BsFillPeopleFill size={28} className='text-orange-500' />, 'Гостей:', '3'],
  [<FaSmileBeam size={28} className='text-orange-500' />, 'Удобства:', 'Wi-Fi, телевизор, холодильник, ванная'],
  [<FaBed size={28} className='text-orange-500' />, 'Тип кровати:', 'Двуспальная кровать'],
  [<FaCouch size={28} className='text-orange-500' />, 'Гостинные:', '1'],
  [<FaShower size={28} className='text-orange-500' />, 'Ванные:', '1'],
  [<FaInfoCircle size={28} className='text-orange-500' />, 'Площадь:', '25 м2'],
  [<FaInfoCircle size={28} className='text-orange-500' />, 'Этаж:', '2-ой']
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
            <div key={itemIndex} className='w-full px-5 flex justify-center items-center py-8 lg:py-12 bg-neutral-100'>
              <div className='w-full max-w-screen-2xl'>
                <div className='w-full mb-8'>
                  <h1 className='text-2xl lg:text-3xl font-serif font-semibold border-l-[6px] border-green-600 pl-3'>{roomInfo[itemIndex][2]}</h1>
                </div>
                <div className='w-full flex flex-col xl:flex-row justify-between items-start mb-10'>
                  <div className='w-full xl:w-7/12 2xl:w-2/3 h-[280px] sm:h-[400px] md:h-[560px] mb-10 xl:mb-0'>
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
                  <div className='w-full xl:w-5/12 2xl:w-1/3 h-auto xl:h-[560px] xl:ml-10 p-8 bg-white rounded-lg shadow-lg'>
                    <div className='flex justify-start items-end pb-6 border-b border-neutral-300'>
                      <h3 className='text-4xl sm:text-5xl text-orange-600 font-bold mr-2'>{roomInfo[itemIndex][3]}</h3>
                      <p className='text-xl sm:text-2xl'>руб. за сутки</p>
                    </div>  
                    <p className='mt-6 text-lg font-serif pb-6 border-b border-neutral-300'>Эти Аппартаменты расположены на третьем этаже гостиничного здания и рассчитаны на два человека (+ 2 доп. места ). В аппартаментах: спальня с двухспальной кроватью и гостинная комната с двухспальным раскладным диваном, ТВ, кухня и постельное белье. Один саузел с душевой комнатой. Рядом с гостиницей расположена зона барбекю общего пользования со столиками и зоной отдыха.</p>
                    <div className='w-full mt-8 flex justify-between items-center'>
                      <button className='mr-3 w-1/2 py-4 px-2 text-white text-lg sm:text-xl rounded-md bg-green-600 hover:brightness-75 duration-200'>Оставить заявку</button>
                      <a href='#description' className='ml-3 w-1/2 py-4 px-2 flex justify-center items-center text-green-600 text-lg sm:text-xl rounded-md bg-white border-2 border-green-600 hover:brightness-75 duration-200'>Подробнее</a>
                    </div>
                  </div>
                </div>
                <div id='description' className='w-full h-auto xl:h-[450px] 2xl:h-[500px] p-8 bg-white rounded-lg shadow-lg flex flex-col xl:flex-row justify-between items-start'>
                  <div className='w-full xl:w-1/2 h-full border-b xl:border-b-0 xl:border-r border-neutral-300 pb-6 xl:pb-0 pr-0 xl:pr-8'>
                    <h1 className='text-2xl 2xl:text-3xl font-semibold mb-6 pl-4 border-l-4 border-green-600'>Описание</h1>
                    <p className='text-md 2xl:text-lg font-serif'>Эти Апартаменты расположены на третьем этаже гостиничного здания и рассчитаны на два человека (+ 2 доп. места ).<br/><br />В аппартаментах: спальная комната с двухспальной кроватью, комодом и шкафом. Кухонная зона в гостинной комнате оборудована электрочайником, электроплитой, холодильником, микроволновой печью, посудой и всем самым необходимым для приготовления питания, а так же обеденным столом на 4 человека. В гостиной зоне расположен двуспальный раскладывающийся диван, ТВ, комод, шкаф для одежды, постельное белье. Один санузел с душевой комнатой.<br /><br />Рядом с гостиницей расположена зона барбекю общего пользования со столиками и зоной отдыха.</p>
                  </div>
                  <div className='w-full xl:w-1/2 h-full pl-0 xl:pl-8 pt-6 xl:pt-0'>
                    <h1 className='text-2xl 2xl:text-3xl font-semibold mb-6 pl-4 border-l-4 border-green-600'>Характеристики</h1>
                    <div className='flex justify-between items-center'>
                      <ul>
                        {characteristicsContent.map((charItem, charIndex) => (
                          <li key={charIndex} className='flex justify-start items-center pb-4'>
                            <div className='flex justify-start items-center'>
                              {charItem[0]}
                              <p className='ml-4 text-sm esm:text-base sm:text-lg text-neutral-500 font-serif'>{charItem[1]}</p>
                            </div>
                            <p className='ml-4 text-sm esm:text-base sm:text-lg font-medium font-serif'>{charItem[2]}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
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