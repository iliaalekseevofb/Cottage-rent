import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

const PopupForm = ({togglePopup, setTogglePopup}) => {
  const popupRef = useRef();
  useEffect(() => {
    let popupHandler = (e) => {
      if (!popupRef.current.contains(e.target))
      setTogglePopup(false);
    };
    document.addEventListener('mousedown', popupHandler)
  });

  return (togglePopup) ?
    (<div className='fixed z-30 top-0 left-0 w-full h-[100vh] flex justify-center items-center bg-myBackground'>
      <div className='w-[560px] h-[760px] bg-white rounded-lg' ref={popupRef}>
        <div className='flex justify-between items-center p-5 border-b border-neutral-300'>
          <h1 className='text-3xl font-bold'>Заказать звонок</h1>
          <button onClick={() => setTogglePopup(false)}>
            <GrClose size={28} />
          </button>
        </div>
        <div className='p-5'>
          <h3 className='text-xl text-neutral-500 text-semibold mb-2'>Введите ваше имя:</h3>
          <input type='text' placeholder='Имя...' className='w-full h-12 px-2 rounded-md border border-neutral-300 outline-green-800' />
          <h3 className='text-xl text-neutral-500 text-semibold mt-4 mb-2'>Введите ваш E-mail:</h3>
          <input type='text' placeholder='E-mail...' className='w-full h-12 px-2 rounded-md border border-neutral-300 outline-green-800' />
          <h3 className='text-xl text-neutral-500 text-semibold mt-4 mb-2'>Введите ваш номер телефона</h3>
          <input type='text' placeholder='Телефон...' className='w-full h-12 px-2 rounded-md border border-neutral-300 outline-green-800' />
          <h3 className='text-xl text-neutral-500 text-semibold mt-4 mb-2'>Комментарии:</h3>
          <textarea type='text' className='w-full h-20 max-h-20 px-2 rounded-md border border-neutral-300 outline-green-800' />
        </div>
        <p className='px-5 text-neutral-700'>Отправляя данную форму, вы даете свое согласие на обработку персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ "О персональных данных", на условиях и для целей, определенных <Link onClick={() => setTogglePopup(false)} className='text-green-600' to='/privacy-policy'>Политикой конфиденциальности</Link></p>
        <div className='mt-6 px-5'>
          <button className='w-full p-3 rounded-md bg-green-600 hover:brightness-75 duration-200 text-white text-xl' onClick={() => setTogglePopup(false)}>Отправить</button>
        </div>
      </div>
    </div>)
  : '';
}

export default PopupForm