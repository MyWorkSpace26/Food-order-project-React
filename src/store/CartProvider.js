/* file allow to  manage the context in some component */

import { useReducer } from "react";

import CartContext from "./cart-context";

const addCart = "ADD";
const deleteCart = "REMOVE";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReduser = (state, action) => {
  switch (action.type) {
    case addCart:
      /* Example, i will change */
      /* concat unlike push, it doesn't edit the existing array but return a new array */
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReduser,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: addCart, item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: deleteCart, id: id });
  };

  /*this will be the concrete context value through which will also be updated over time.*/
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
