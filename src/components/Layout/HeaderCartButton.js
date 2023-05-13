import React, { useContext } from "react";

import clases from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  /*reduces - method which allows us to transform an array of data into a single value*/
  /*The second argument is a starting value */
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={clases.button} onClick={props.onClick}>
      {/* icon cart */}
      <span className={clases.icon}>
        <CartIcon />
      </span>

      {/* text cart */}
      <span>Your Cart</span>

      {/* the total amount of items in the cart */}
      <span className={clases.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
