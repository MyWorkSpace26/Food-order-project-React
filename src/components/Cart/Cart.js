import Modal from "../UI/Modal";

import clases from "./Cart.module.css";

const Cart = (props) => {
  const cartitems = (
    <ul className={clases["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: "2", price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartitems}
      <div className={clases.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={clases.actions}>
        <button className={clases["button--alt"]}>Close</button>
        <button className={clases["button"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
