import clases from "./CartItem.module.css";

const Cart = (props) => {
  const cartitems = (
    <ul className={calses["cart-item"]}>
      {[{ id: "c1", name: "Sushi", amount: "2", price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartitems}
      <div className={clases.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={calses.actions}>
        <button className={clases["button--alt"]}>Close</button>
        <button className={clases["button"]}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
