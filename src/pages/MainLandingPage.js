import React from "react";
// import Navbar from "../components/GettingStarted/Navbar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

const MainLandingPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default MainLandingPage;
