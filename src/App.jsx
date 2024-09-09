import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Product from "./components/Product/Product";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Home />
        <About />
        <Product />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
