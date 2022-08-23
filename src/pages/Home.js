import React from 'react';
import { ImageSlider, About, Accomodation, Gallery, Testimonials, Contacts } from '../components';

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <About />
      <Accomodation/>
      <Gallery />
      <Testimonials />
      <Contacts />
    </div>
  )
}

export default Home