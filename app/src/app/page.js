import React from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Feature from '@/components/Feature';
import Offer from '@/components/Offer';
import About from '@/components/About';
import Contect from '@/components/Contect';
import Imc from "@/components/Imc"

const Home = () => {
  return (
    <div>
    <Navbar />
      <Header/>
    <Feature/>
      <Offer/>
      <Imc/>
      <About/>
      <Contect/>
    </div>
  );
}

export default Home;
