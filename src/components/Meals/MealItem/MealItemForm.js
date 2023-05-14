import { useRef, useState } from "react";
import clases from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    /* convert the string number to a number */
    const enteredAmountNubmer = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNubmer < 1 ||
      enteredAmountNubmer > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNubmer);
  };

  return (
    <form className={clases.form} onClick={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1 - 5).</p>}
    </form>
  );
};

export default MealItemForm;
