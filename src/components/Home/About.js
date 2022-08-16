import React from 'react';
import { vuAnh } from '../../assets';

const count = [
  [128, 'Клиентов за последнее лето'],
  [7, 'Минут пешком до моря'],
  [25, 'Квадратных метров - площадь одного номера'],
  [15, 'Магазинов и кафе в пределах 1 километра']
]

const About = () => {
  return (
    <div id='about' className='w-full flex justify-center items-center mt-16'>
      <div className='w-full max-w-screen-2xl'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-sans pb-2'>О нас</h1>
          <p className='w-20 border-t-4 border-orange-400'></p>
        </div>
        <div className='mt-24 flex justify-between items-start'>
          <div className='w-[500px] h-[500px]'>
            <img className='w-full h-full rounded-[250px] border-4 border-green-700 object-cover' src={vuAnh} alt='house' />
          </div>
          <div className='w-7/12'>
            <p className='text-2xl mb-10'>Текст о компании – это идеальная возможность для отстройки от конкурентов. Нужно оперировать фактами. Пусть их будет немного, но именно они будут демонстрировать уникальность вашей компании.</p>
            <p className='text-2xl'>Шаблон написания текста о компании: чем занимаемся; что у нас получается лучше всего; примеры наших работ; в чём отличие компании; наша команда в лицах; наша компания в цифрах; что о нас говорят клиенты; какие гарантии мы даём.</p>
            <div className='mt-12 flex justify-between items-start'>
              {count.map((item, index) => (
                <div key={index} className='w-48' >
                  <h1 className='text-6xl text-orange-500'>{item[0]}</h1>
                  <p className='text-xl text-neutral-500'>{item[1]}</p>
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