import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Conatct from "./Component/Contact/Conatct";
import Footer from "./Component/Footer/Footer";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Testing from "./Component/Testing";
import Contact from "./Component/Contact/Conatct";
// import Login from './Component/Login/Login';

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Login/> */}
      {/* <Hero/>
      <About/>
      <Conatct />
     <Footer/> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/login" element={<Testing />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
