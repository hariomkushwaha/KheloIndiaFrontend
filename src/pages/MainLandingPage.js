import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

const MainLandingPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Section />
      <Faq />
      <Footer />
    </div>
  );
};

export default MainLandingPage;
