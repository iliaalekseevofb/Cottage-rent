import React from 'react';
import { ImageSlider, About, Accomodation, Gallery } from '../components';

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <About />
      <Accomodation/>
      <Gallery />
    </div>
  )
}

export default Home