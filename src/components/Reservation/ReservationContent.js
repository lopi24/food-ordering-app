import { useRef, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./ReservationContent.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const options = [
  { value: "1", label: "1 Person" },
  { value: "2", label: "2 Persons" },
  { value: "3", label: "3 Persons" },
  { value: "4", label: "4 Persons" },
  { value: "5", label: "5 Persons" },
  { value: "6", label: "6 Persons" },
];

let curr = new Date();
curr.setDate(curr.getDate() + 3);
let date = curr.toISOString().substring(0, 10);

const ReservationContent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const nameInputRef = useRef();
  const partySizeInputRef = useRef();
  const dateInputRef = useRef();
  const timeInputRef = useRef();

  let location = useLocation();
  const navigate = useNavigate();
  //   console.log(location.pathname);

  const homePageLocation = (
    <Link to="/reservation">
      <button>Find a Table</button>
    </Link>
  );

  const reservationPageLocation = <button>Find a Table</button>;

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const enteredName = nameInputRef.current.value;
    const enteredPartSize = partySizeInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredTime = timeInputRef.current.value;
    await fetch(
      "https://react-http-41d46-default-rtdb.asia-southeast1.firebasedatabase.app/reservations.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: enteredName,
          partySize: enteredPartSize,
          date: enteredDate,
          time: enteredTime,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
  };

  const optionsContent = options.map((option) => (
    <option value={option.value} key={option.value}>
      {option.label}
    </option>
  ));

  const modalActions = (
    <div className={classes.actions}>
      {location.pathname === "/home" && homePageLocation}
      {location.pathname === "/reservation" && reservationPageLocation}
    </div>
  );

  const reservationsModalContent = (
    <div className={classes["form-section"]}>
      <div className={classes["reservation-section"]}>
        <div className={classes.heading}>
          <h1>Reserve a Table</h1>
          <p>
            To help us find the best table for you, select the preferred party
            size, date, and time of reservation.
          </p>
        </div>
        <form className={classes.form} onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor="name">Table reservation for:</label>
            <input
              type="text"
              id="name"
              ref={nameInputRef}
              defaultValue="Enter your name"
            />
          </div>
          <div className={classes["party-size"]}>
            <label htmlFor="party-size">Party Size</label>
            <select id="party-size" options={options} ref={partySizeInputRef}>
              {optionsContent}
            </select>
          </div>
          <div className={classes.date}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              defaultValue={date}
              ref={dateInputRef}
            />
          </div>
          <div className={classes.time}>
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              defaultValue="18:00"
              ref={timeInputRef}
            />
          </div>
          {modalActions}
        </form>
      </div>
    </div>
  );

  const isSubmittingModalContent = (
    <>
      <p>Sending reservation data...</p>
    </>
  );

  // if the reservation was submitted
  const navigateHandler = () => {
    navigate("/home");
  };

  const didSubmitModalContent = (
    <Modal>
      <p>You successfully reserved a table!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={navigateHandler}>
          Close
        </button>
      </div>
    </Modal>
  );

  return (
    <>
      {reservationsModalContent}
      {isSubmitting && <Modal>{isSubmittingModalContent}</Modal>}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </>
  );
};
export default ReservationContent;
