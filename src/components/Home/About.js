import React from 'react';
import { vuAnh } from '../../assets';

const count = [
  [128, 'Клиентов за последнее лето'],
  [7, 'Минут пешком до моря'],
  [25, 'Кв. метров - площадь номера'],
  [15, 'Магазинов и кафе в пределах 1 км']
]

const About = () => {
  return (
    <div id='about' className='w-full px-5 flex justify-center items-center mt-8 lg:mt-16'>
      <div className='w-full max-w-screen-2xl'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl lg:text-5xl font-sans pb-2'>О нас</h1>
          <p className='w-12 lg:w-20 border-t-4 border-orange-400'></p>
        </div>
        <div className='mt-8 lg:mt-12 xl:mt-24 flex flex-col xl:flex-row justify-center xl:justify-between items-center xl:items-start'>
          <div className='w-full sm:w-[500px] sm:min-w-[500px] sm:h-[500px] mb-8 lg:mb-12 xl:mb-0 xl:mr-12'>
            <img className='w-full h-full rounded-[20px] sm:rounded-[250px] border-4 border-green-700 object-cover' src={vuAnh} alt='house' />
          </div>
          <div className='w-full xl:w-7/12 overflow-auto'>
            <p className='text-xl lg:text-2xl mb-10 text-center xl:text-left'>Текст о компании – это идеальная возможность для отстройки от конкурентов. Нужно оперировать фактами. Пусть их будет немного, но именно они будут демонстрировать уникальность вашей компании.</p>
            <p className='text-xl lg:text-2xl text-center xl:text-left'>Шаблон написания текста о компании: чем занимаемся; что у нас получается лучше всего; примеры наших работ; в чём отличие компании; наша команда в лицах; наша компания в цифрах; что о нас говорят клиенты; какие гарантии мы даём.</p>
            <div className='mt-6 esm:mt-12 flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start'>
              {count.map((item, index) => (
                <div key={index} className='w-full sm:w-48 mr-5 mb-6 sm:mb-0' >
                  <h1 className='text-6xl text-center xl:text-left text-orange-500'>{item[0]}</h1>
                  <p className='text-xl text-center xl:text-left text-neutral-500'>{item[1]}</p>
                </div>
              ))}
            </div>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About