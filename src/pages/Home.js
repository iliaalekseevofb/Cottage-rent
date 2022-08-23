import React from 'react';
import { ImageSlider, About, Accomodation, Gallery, Testimonials } from '../components';

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <About />
      <Accomodation/>
      <Gallery />
      <Testimonials />
    </div>
  )
}

export default Home