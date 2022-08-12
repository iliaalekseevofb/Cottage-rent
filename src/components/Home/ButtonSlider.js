import React from 'react';
import './ImageSlider.css';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

const ButtonSlider = ({moveSlide, direction}) => {
  console.log(moveSlide, direction);
  return (
    <button onClick={moveSlide} className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}>
        {direction === 'next' ? <BiRightArrow /> : <BiLeftArrow />}
    </button>
  )
}

export default ButtonSlider