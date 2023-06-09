import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  /* two functions allow to update that context */
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
