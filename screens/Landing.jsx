import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Blog from "../components/Sections/Blog";
import Hero from "../components/Sections/Hero/Hero";
import Footer from "../components/Sections/Footer/Footer";
import Currentstudents from "./Currentstudents/Currentstudents";
import Sponsers from "./Sponsers/Sponsers";
import OurTrainer from "./OurTrainers/OurTrainer";


export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Hero/>
      <Blog />
      <OurTrainer/>
      <Sponsers/>
      {/* <Currentstudents/> */}
    
      <Footer/>
    </>
  );
}


