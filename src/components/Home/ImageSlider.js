import React, { useState } from 'react';
import { defleurMagali, erikMclean, kennyTimmer1, kennyTimmer2, louisRenaudineau, lucaBravo, matthewHarwood, simonWaelti, stephenWheeler } from '../../assets';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import './ImageSlider.css';

const sources = [kennyTimmer1, erikMclean, defleurMagali, kennyTimmer2, louisRenaudineau, lucaBravo, matthewHarwood, simonWaelti, stephenWheeler];

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
    <div className='container-slider'>
      {sources.map((item, index) => {
        return (
        <div key={index} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
            <img src={item} alt='...' />
          </div>
        )
      })}
      <button onClick={nextSlide} className='btn-slide next'>
          <BiRightArrow />
      </button>
      <button onClick={prevSlide} className='btn-slide prev'>
          <BiLeftArrow />
      </button>
      <div className='container-dots'>
        {Array.from({length: 9}).map((item, index) => (
          <div onClick={() => {moveDot(index + 1)}} className={slideIndex === index + 1 ? 'dot active cursor-pointer' : 'dot cursor-pointer'}></div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider