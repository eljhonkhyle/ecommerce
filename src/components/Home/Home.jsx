import React from "react";
import "./home.css";
import Espresso from "../../assets/espresso.png";
import Cappuccino from "../../assets/cappuccino.png";
import Croisant from "../../assets/croisant.png";

const Home = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <h1>Welcome to EKB Coffee</h1>
        <p>Your go-to place for the finest coffee and pastries.</p>
        <button className="cta-button">Order Now</button>
      </header>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          <div className="product">
            <img src={Espresso} alt="Espresso" />
            <h3>Espresso</h3>
            <p>Rich and bold espresso shot.</p>
          </div>
          <div className="product">
            <img src={Cappuccino} alt="Cappuccino" />
            <h3>Cappuccino</h3>
            <p>Creamy cappuccino with a frothy top.</p>
          </div>
          <div className="product">
            <img src={Croisant} alt="Croissant" />
            <h3>Croissant</h3>
            <p>Freshly baked buttery croissant.</p>
          </div>
        </div>
      </section>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          At EKB Coffee, we pride ourselves on serving the finest coffee made
          from the freshest beans. Our cozy atmosphere and friendly staff make
          every visit a special experience. Come by and enjoy a cup of coffee
          crafted just for you!
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 EKB Coffee Shop. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
