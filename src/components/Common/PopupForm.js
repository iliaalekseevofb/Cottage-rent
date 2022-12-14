import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

const PopupForm = ({togglePopup, setTogglePopup}) => {
  const popupRef = useRef(null);
  useEffect(() => {
    let popupHandler = (e) => {
      if (!popupRef.current.contains(e.target))
        setTogglePopup(false);
    };
    document.addEventListener('mousedown', popupHandler)
  });

  return (
    <div className={`${togglePopup ? 'hidden sm:flex' : 'hidden'} fixed z-30 top-0 left-0 w-full min-h-screen flex justify-center items-center bg-myBackground`}>
      <div className='short:w-[420px] w-[560px] short:h-[500px] h-[740px] bg-white rounded-lg' ref={popupRef}>
        <div className='flex justify-between items-center short:p-3 p-4 border-b border-neutral-300'>
          <h1 className='short:text-xl text-3xl font-bold'>Заказать звонок</h1>
          <button onClick={() => setTogglePopup(false)}>
            <GrClose size={24} />
          </button>
        </div>
        <div className='short:px-3 short:py-2 p-4'>
          <h3 className='short:text-sm text-xl text-neutral-500 text-semibold mb-2'>Введите ваше имя:</h3>
          <input type='text' placeholder='Имя...' className='w-full short:h-8 h-12 px-2 short:text-sm text-base rounded-md border border-neutral-300 outline-green-800' />
          <h3 className='short:text-sm text-xl text-neutral-500 text-semibold short:mt-2 mt-4 mb-2'>Введите ваш E-mail:</h3>
          <input type='text' placeholder='E-mail...' className='w-full short:h-8 h-12 px-2 short:text-sm text-base rounded-md border border-neutral-300 outline-green-800' />
          <h3 className='short:text-sm text-xl text-neutral-500 text-semibold short:mt-2 mt-4 mb-2'>Введите ваш номер телефона</h3>
          <input type='text' placeholder='Телефон...' className='w-full short:h-8 h-12 px-2 short:text-sm text-base rounded-md border border-neutral-300 outline-green-800' />
          <h3 className='short:text-sm text-xl text-neutral-500 text-semibold short:mt-2 mt-4 short:mb-0 mb-2'>Комментарии:</h3>
          <textarea type='text' className='w-full short:h-8 short:max-h-8 h-20 max-h-20 px-2 rounded-md border border-neutral-300 outline-green-800' />
        </div>
        <p className='short:px-3 px-4 short:text-sm text-base text-neutral-700'>Отправляя данную форму, вы даете свое согласие на обработку персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ "О персональных данных", на условиях и для целей, определенных <Link onClick={() => setTogglePopup(false)} className='text-green-600' to='/privacy-policy'>Политикой конфиденциальности</Link></p>
        <div className='short:mt-3 mt-6 short:px-3 px-4'>
          <button className='w-full short:p-2 p-3 rounded-md bg-green-600 hover:brightness-75 duration-200 text-white short:text-md text-xl' onClick={() => setTogglePopup(false)}>Отправить</button>
        </div>
      </div>
    </div>
  )
}

export default PopupForm