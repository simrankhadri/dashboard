import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Conatct from "./Component/Contact/Conatct";
import Footer from "./Component/Footer/Footer";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Testing from "./Component/Login";
import Contact from "./Component/Contact/Conatct";
import Studentdashboard from "./Component/student/Studentdashboard";
import Login from "./Component/Login";
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
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/dashboard" element={<Studentdashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
