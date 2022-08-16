import React from 'react';

const PopupForm = () => {
  return (
    <div className='fixed z-30 top-0 left-0 w-full h-[100vh] flex justify-center items-center bg-myBackground'>
      <div className='w-72 h-72 bg-white'>
        <div>
          <h1>Заказать звонок</h1>
          <button>X</button>
        </div>
        <div>
          <h3>Hello</h3>
          <input />
          <h3>Hello</h3>
          <input />
          <h3>Hello</h3>
          <input />
          <h3>Hello</h3>
          <textarea />
        </div>
        <p>Отправляя данную форму, вы даете свое согласие на обработку персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ "О персональных данных", на условиях и для целей, определенных Политикой конфиденциальности</p>
        <button>Отправить</button>
      </div>
    </div>
  )
}

export default PopupForm