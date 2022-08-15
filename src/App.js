import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Room1, Room2, Room3, Room4, Payment, PrivacyPolicy, ErrorPage } from './pages';
import { Navbar, Footer, InfoBar } from './components';

const App = () => {
  return (
    <div className='app'>
      <InfoBar />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room1' element={<Room1 />} />
        <Route path='/room2' element={<Room2 />} />
        <Route path='/room3' element={<Room3 />} />
        <Route path='/room4' element={<Room4 />} />
        <Route path='./payment' element={<Payment />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App