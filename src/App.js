import "./App.css";
import React from "react";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import AboutMe from "./components/pages/AboutMe";
import Resume from "./components/pages/Resume";
import NavTabs from "./components/NavTabs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavTabs />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // (<Footer />)
  );
};
export default App;
