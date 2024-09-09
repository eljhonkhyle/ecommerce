import React from "react";
import "./product.css";
import Espresso from "../../assets/espresso.png";
import Cappuccino from "../../assets/cappuccino.png";
import Croisant from "../../assets/croisant.png";

const Product = () => {
  return (
    <div className="featured-products" id="product">
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
    </div>
  );
};

export default Product;
