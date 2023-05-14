import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import clases from "./MealItem.module.css";
const MealItem = (props) => {
  //to output this formattedprice with two decimal places
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={clases.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={clases.description}>{props.description}</div>
        <div className={clases.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
