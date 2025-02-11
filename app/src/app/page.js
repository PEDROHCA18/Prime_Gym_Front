import React from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Feature from '@/components/Feature';
import Offer from '@/components/Offer';
import About from '@/components/About';
import Contect from '@/components/Contect';


const Home = () => {
  return (
    <div>
    <Navbar />
      <Header/>
    <Feature/>
      <Offer/>
      <About/>
      <Contect/>
    </div>
  );
}

export default Home;
