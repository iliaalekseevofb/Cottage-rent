import React from 'react';
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
  return (
    <div id='gallery' className='w-full px-5 flex justify-center items-center py-12'>
      <div className='w-full max-w-screen-2xl'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl lg:text-4xl font-sans pb-2'>Галерея</h1>
          <p className='w-12 lg:w-20 border-t-4 border-orange-500'></p>
        </div>
        <div className='w-full grid grid-cols-4 grid-rows-2 gap-2 rounded-xl overflow-hidden mt-12'>
          {galleryContent.map((item, index) => (
            <div className='realtive w-full h-full overflow-hidden cursor-pointer flex justify-center items-center'>
              <img src={item[0]} alt={item[1]} className='w-full h-full object-cover transition ease-in-out hover:scale-125 hover:brightness-50 duration-500' /> 
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery