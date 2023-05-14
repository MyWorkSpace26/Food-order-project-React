import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import clases from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {};
  const cartitems = (
    <ul className={clases["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onStop}>
      {cartitems}
      <div className={clases.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={clases.actions}>
        <button className={clases["button--alt"]} onClick={props.onStop}>
          Close
        </button>
        {hasItems && <button className={clases["button"]}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
