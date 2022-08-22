import React from 'react';
import { ImageSlider, About, Accomodation, Features } from '../components';

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <About />
      <Accomodation/>
      <Features />
    </div>
  )
}

export default Home