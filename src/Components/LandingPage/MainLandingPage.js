import React from 'react';
import Navbar from './Navbar';
import Header from "./Header";
import Hero from './Hero';
import About from './About';
import Footer from './Footer';

const MainLandingPage = () => {
  return (
    <div>
    <Header />
    <Navbar />
    <Hero />
    <About />
    <Footer />
    </div>
  )
}

export default MainLandingPage;