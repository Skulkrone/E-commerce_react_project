import React from "react";
import cartIcon from "./shopping-cart.svg";
import "./FloatingCart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FloatingCart() {

  // useSelector = récupérer state depuis store
  const shoppingCart = useSelector(state => state);

  // console.log(shoppingCart);

  let totalItems = 0;
  for(const item of shoppingCart.cart){
    totalItems += item.quantity
  }

  return (
    <Link to="/shoppingCart">
      <div className="floating-cart">
        <p>Votre Panier</p>
        <div className="img-notif-container">
          <img src={cartIcon} alt="icône caddie" />
          <span className="notif">{totalItems}</span>
        </div>
      </div>
    </Link>
  );
}
