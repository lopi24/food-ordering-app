import { useContext, useState } from "react";
import ModalContext from "../../store/modal/modal-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);

  // this is also for client's experience, this is for them to know whether their orders was being processed or if it was successfull.
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const modalCtx = useContext(ModalContext);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  // we need addItem here and the removeItem from cart context
  // create cartAddItemHandler and insert cart context add item here
  const cartAddItemHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  // create cartremoveItemHandler and insert cart context remove item here
  const cartRemoveItemHandler = (id) => {
    console.log("Clicked!");
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  // submit order handler
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://react-http-41d46-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onAdd={cartAddItemHandler.bind(null, item)}
          onRemove={cartRemoveItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  // this is for displaying buttons for close and if the cart has items it will also display order.
  const modalActions = (
    <div className={classes.actions}>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
      <button className={classes["button--alt"]} onClick={modalCtx.hide}>
        Close
      </button>
    </div>
  );

  // this is for displaying the items inside the cart as well as the tota amount. This is also where we display Checkout component if the Order button was clicked.
  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {!isCheckout && modalActions}
      {isCheckout && <Checkout onConfirm={submitOrderHandler} />}
    </>
  );

  // if the order is on the process of submitting
  const isSubmittingModalContent = <p>Sending order data...</p>;

  // if the order was submitted
  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={modalCtx.hide}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal>
      {/* not in the process of submitting and not submitted yet, this will display the items and the buttons for order and cancel */}
      {!isSubmitting && !didSubmit && cartModalContent}
      {/* is on the process of submitting, this will display the sending order data */}
      {isSubmitting && isSubmittingModalContent}
      {/* not submitting but already submitted, this will display the data was successfully submitted */}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
