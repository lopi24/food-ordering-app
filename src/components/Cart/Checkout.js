import { useContext, useRef, useState } from "react";
import ModalContext from "../../store/modal/modal-context";
import classes from "./Checkout.module.css";

// helpers for validation
// for the postal code
const isFiveChars = (value) => value.trim().length === 5;
// for the rest of the input
const isEmpty = (value) => value.trim() === "";

const Checkout = (props) => {
  const modalCtx = useContext(ModalContext);

  // this is only for showing invalidation (client's experience)
  const [formInputsValidty, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    // validate every input

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = isFiveChars(enteredPostal);

    // if all input is valid validate the form to be able to proceed

    // this formInputValidty is for client experience for them to know that it is invalid, we will use classes for this.
    setFormInputsValidity({ 
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
    });

    // this is for the form if it's not valid just return nothing
    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }
    // if the form is valid
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostal,
    });
  };

  // client experience invalidation using classes(css)
  const nameControlClasses = `${classes.control} ${
    formInputsValidty.name ? "" : classes.invalid
  } `;
  const streetControlClasses = `${classes.control} ${
    formInputsValidty.street ? "" : classes.invalid
  } `;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidty.postalCode ? "" : classes.invalid
  } `;
  const cityControlClasses = `${classes.control} ${
    formInputsValidty.city ? "" : classes.invalid
  } `;

  return (
    <form onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidty.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidty.street && <p>Please enter a valid name.</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidty.postalCode && <p>Please enter a valid name.</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidty.city && <p>Please enter a valid name.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={modalCtx.hide}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
