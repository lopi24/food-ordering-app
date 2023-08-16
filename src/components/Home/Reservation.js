import classes from "./Reservation.module.css";
import { ReactComponent as YourSvg } from "../../assets/food.svg";
import { Link } from "react-router-dom";
import ReservationContent from "../Reservation/ReservationContent";

const Reservation = () => {
  return (
    <div className={classes["form-section"]}>
      <div className={classes["menu-section"]}>
        <div className={classes.icon}>
          <YourSvg className={classes.svg} />
        </div>
        <div className={classes.content}>
          <h6>Check out our meals</h6>
          <h2>Meals are waiting for you.</h2>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
      <ReservationContent />
    </div>
  );
};

export default Reservation;
