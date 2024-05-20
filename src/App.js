import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Services from "./Services";
import NewServices from "./NewServices";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <About />
        <Services />
        <NewServices />
      </main>
      <Footer />
    </div>
  );
}

export default App;
