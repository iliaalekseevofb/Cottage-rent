import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, RoomDetails, Payment, PrivacyPolicy, ErrorPage } from './pages';
import { Navbar, Footer, InfoBar } from './components';

const App = () => {
  return (
    <div className='app'>
      <InfoBar />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room-:id' element={<RoomDetails />} />
        <Route path='./payment' element={<Payment />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App