import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { close } from '../../assets';


const Modal = ({clickedImage, setClickedImage, nextImage, prevImage}) => {

  const handleClose = (e) => {
    if (e.target.classList.contains('handleClose')) {
      setClickedImage(null)
    }
  }

  return (
    <div onClick={handleClose} className='handleClose fixed top-0 z-40 left-0 w-full h-full bg-gradient-to-b from-myBackground to-myBackground'>
      <button onClick={prevImage} className='w-[40px] sm:w-[60px] xl:w-[80px] h-full absolute z-20 flex justify-center items-center text-white cursor-pointer top-0 bottom-0 left-0 hover:bg-gradient-to-t hover:from-myGradient hover:to-myGradient'>
        <IoIosArrowBack size={24} />
      </button>
      <div className='absolute left-[15%] right-[15%] top-[35%] esm:top-[30%] lg:top-[10%] bottom-[35%] esm:bottom-[30%] lg:bottom-[10%] bg-white overflow-hidden'>
        <img className='w-full h-full object-cover' src={clickedImage} alt='Zoom' />
        <img src={close} alt='close' onClick={handleClose} className='handleClose cursor-pointer absolute z-30 top-3 esm:top-4 right-3 esm:right-4' />
      </div>
      <button onClick={nextImage} className='w-[40px] sm:w-[60px] xl:w-[80px] h-full absolute z-20 flex justify-center items-center text-white cursor-pointer top-0 bottom-0 right-0 hover:bg-gradient-to-t hover:from-myGradient hover:to-myGradient'>
        <IoIosArrowForward size={24} />
      </button>
    </div>
  )
}

export default Modal