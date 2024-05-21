import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Services from "./Services";
import NewServices from "./NewServices";
import ContactUs from "./ContactUs";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <About />
        <ContactUs />
        <Services />
        <ContactUs />
        <NewServices />
      </main>
      <Footer />
    </div>
  );
}

export default App;
