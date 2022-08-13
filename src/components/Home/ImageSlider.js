import React, { useState } from 'react';
import { defleurMagali, erikMclean, kennyTimmer1, kennyTimmer2, louisRenaudineau, lucaBravo, matthewHarwood, simonWaelti, stephenWheeler } from '../../assets';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

const sources = [stephenWheeler, kennyTimmer1, erikMclean, defleurMagali, kennyTimmer2, louisRenaudineau, lucaBravo, matthewHarwood, simonWaelti];

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
          <div key={index} className={`${slideIndex === index + 1 ? 'opacity-100' : 'opacity-0'} w-full h-full absolute z-10 transition-opacity ease-in-out duration-500`}>
            <img className = 'w-full h-full object-cover' src={item} alt='...' />
          </div>
        )
      })}
      <button onClick={nextSlide} className='w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] absolute z-20 flex justify-center items-center rounded-[50%] border-2 border-white text-white cursor-pointer top-[50%] right-[10px] lg:right-[20px] -translate-y-[60%] hover:bg-gradient-to-t hover:from-myGradient hover:to-myGradient'>
          <BiRightArrow size={24} />
      </button>
      <button onClick={prevSlide} className='w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] absolute z-20 flex justify-center items-center rounded-[50%] border-2 border-white text-white cursor-pointer top-[50%] left-[10px] lg:left-[20px] -translate-y-[60%] hover:bg-gradient-to-t hover:from-myGradient hover:to-myGradient'>
          <BiLeftArrow size={24} />
      </button>
      <div className='absolute flex z-20 bottom-[10px] left-[50%] -translate-x-[50%]'>
        {Array.from({length: 9}).map((item, index) => (
          <div key={index} onClick={() => {moveDot(index + 1)}} className={slideIndex === index + 1 ? 'bg-white w-[15px] h-[15px] rounded-[50%] border-2 border-white mx-[5px] cursor-pointer' : 'w-[15px] h-[15px] rounded-[50%] border-2 border-white mx-[5px] cursor-pointer'}></div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider