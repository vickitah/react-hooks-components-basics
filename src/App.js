import React from "react";
import Navbar from "./Navbar";  // Import Navbar component
import Home from "./Home";      // Import Home component
import About from "./About";    // Import About component

function App() {
  return (
    <div>
      <Navbar />   {/* Render Navbar component */}
      <Home />     {/* Render Home component */}
      <About />    {/* Render About component */}
    </div>
  );
}

export default App;
