import React, { useContext, useEffect, useState } from "react";

import clases from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const { items } = cartCtx;

  /*reduces - method which allows us to transform an array of data into a single value*/
  /*The second argument is a starting value */
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  /* bump animation */
  const btnClasses = `${clases.button} ${btnIsHighlighted ? clases.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    /* the animation is actually only played when this class is added for the first time , 
    so we should also remove the class after the animation finished. */
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    //cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
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
