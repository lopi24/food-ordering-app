import { useContext, useEffect, useState } from "react";
import ModalContext from "../../store/modal/modal-context";
import CartIcon from "../CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../store/cart/cart-context";

const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const modalCtx = useContext(ModalContext);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  // get the quantity per item of cart and then display it in the badge

  const numberOfCartItems = items.reduce((curNum, nextNumFromItems) => {
    return curNum + nextNumFromItems.quantity;
    // the 0 is the initial curNum
  }, 0);

  // console.log(numberOfCartItems);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={modalCtx.show}>
      <span>Your Cart</span>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
