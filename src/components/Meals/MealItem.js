import { useContext } from "react";
import CartContext from "../../store/cart/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  console.log(props.price);

  const price = `$${props.price}`;

  const addToCardHandler = (quantity) => {
    console.log(quantity);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      quantity: quantity,
      price: props.price,
    });
  };

  return (
    // <Link to={`/menu/${props.id}`}>
    <li className={classes.meal} onClick={props.onShown}>
      <div className={classes.card}>
        <div className={classes["meal-content"]}>
          <div className={classes["nameDesc"]}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
          </div>
          <div className={classes.price}>
            <p>{price}</p>
            <MealItemForm onAddToCart={addToCardHandler} />
          </div>
        </div>
        <div className={classes["meal-image"]}>
          <img src={props.image} alt={props.name} />
        </div>
      </div>
    </li>
    // </Link>
  );
};

export default MealItem;
