import React from "react";

import clases from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={clases.button}>
      {/* icon cart */}
      <span className={clases.icon}>
        <CartIcon />
      </span>

      {/* text cart */}
      <span>Your Cart</span>

      {/* the total amount of items in the cart */}
      <span className={clases.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
