import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
const MealItemForm = (props) => {
  const [quantityIsValid, setQuantityIsValid] = useState(true);
  const quantityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredQuantity = quantityInputRef.current.value;
    // console.log(enteredQuantity);

    // simple validation
    const enteredQuantityInNumber = +enteredQuantity;
    // console.log(enteredQuantityInNumber);
    if (
      enteredQuantity.trim().length === 0 ||
      enteredQuantityInNumber < 1 ||
      enteredQuantityInNumber > 5
    ) {
      setQuantityIsValid(false);
      return;
    }
    props.onAddToCart(enteredQuantityInNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={quantityInputRef}
        label="Qty"
        input={{
          id: "quantity",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!quantityIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
