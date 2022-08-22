import React from 'react';
import { ImageSlider, About, Accomodation, Discounts } from '../components';

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <About />
      <Accomodation/>
      <Discounts />
    </div>
  )
}

export default Home