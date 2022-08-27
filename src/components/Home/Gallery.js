import React, { useState } from 'react';
import Modal from './Modal';
import { baileyAnselme, birgitLoit, birgitLoit2, florisBronkhorst, kennyTimmer1, matthewHarwood, minnaAutio, ostapSenyuk } from '../../assets';

const galleryContent = [
  [baileyAnselme, 'Удобное расположение'],
  [birgitLoit, 'Природа вокруг'],
  [birgitLoit2, 'Уютные вечера'],
  [florisBronkhorst, 'Места хватит на всех'],
  [kennyTimmer1, 'Невероятные виды из окна'],
  [matthewHarwood, 'Уникальный дизайн'],
  [minnaAutio, 'Магазины и кафе рядом'],
  [ostapSenyuk, 'Просторные номера']
]

const Gallery = () => {
  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImage(item);
  }

  const nextImage = () => {
    if (currentIndex + 1 !== 8) {
      setCurrentIndex(currentIndex + 1);
      setClickedImage(galleryContent[currentIndex + 1][0]);
    } else {
      setCurrentIndex(0);
      setClickedImage(galleryContent[0][0]);
    }
  }

  const prevImage = () => {
    if (currentIndex - 1 < 0) {
      setCurrentIndex(7);
      setClickedImage(galleryContent[7][0]);
    } else {
      setCurrentIndex(currentIndex - 1);
      setClickedImage(galleryContent[currentIndex - 1][0]);
    }
  }

  return (
    <div id='gallery' className='w-full px-5 flex justify-center items-center py-6 md:py-8 lg:py-10 xl:py-12'>
      <div className='w-full max-w-screen-xl'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-sans pb-2'>Галерея</h1>
          <p className='w-12 border-t-4 border-orange-500'></p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-8 sm:grid-rows-4 lg:grid-rows-2 gap-4 overflow-hidden mt-12'>
          {galleryContent.map((item, index) => (
            <div key={index} className='realtive overflow-hidden cursor-pointer flex justify-center items-center rounded-xl'>
              <img onClick={() => handleClick(item[0], index)} src={item[0]} alt={item[1]} className='w-full h-full object-cover transition ease-in-out hover:scale-125 hover:brightness-50 duration-500' />
            </div>
          ))}
        </div>
        {clickedImage && <Modal clickedImage={clickedImage} setClickedImage={setClickedImage} nextImage={nextImage} prevImage={prevImage} />}
      </div>
    </div>
  )
}

export default Gallery