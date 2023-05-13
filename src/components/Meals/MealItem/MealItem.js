import clases from "./MealItem.module.css";
const MealItem = (props) => {
  //to output this formattedprice with two decimal places
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={clases.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={clases.description}>{props.description}</div>
        <div className={clases.price}>{price}</div>
      </div>

      <div></div>
    </li>
  );
};

export default MealItem;
