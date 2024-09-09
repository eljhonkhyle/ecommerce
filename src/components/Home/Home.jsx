import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <h1>Welcome to EKB Coffee</h1>
        <p>Your go-to place for the finest coffee and pastries.</p>
        <button className="cta-button">Order Now</button>
      </header>
    </div>
  );
};

export default Home;
