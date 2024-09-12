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
      <main className="main">
        <Navbar />
        <Home />
        <About />
        <Product />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
