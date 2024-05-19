import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Stats from "./Stats";
import Features from "./Features";
import Teams from "./Teams";
import Events from "./Events";
import Performance from "./Performance";
import Blog from "./Blog";
import Footer from "./Footer";
import About from "./About";
import Services from "./Services";
import NewServices from "./NewServices";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Services />
      <NewServices />

      <HeroSection />
      <Stats />
      <Features />
      <Teams />
      <Events />
      <Performance />
      <Blog />

      <Footer />
    </div>
  );
}

export default App;
