import React from "react";
import NavbarLanding from "../components/NavbarLanding";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

const MainLandingPage = () => {
  return (
    <div>
      <Header />
      <NavbarLanding />
      <Hero />
      <Section />
      <Faq />
      <Footer />
    </div>
  );
};

export default MainLandingPage;
