import React from 'react';
import Navbar from '../components/GettingStarted/Navbar';
import Header from "../components/GettingStarted/Header";
import Hero from '../components/LandingPage/Hero';
import About from '../components/LandingPage/About';
import Footer from '../components/LandingPage/Footer';

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