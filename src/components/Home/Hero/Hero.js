import classes from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={classes["hero-image"]}>
      <div className={classes["hero-content"]}>
        <div className={classes["hero-content-inner"]}>
          <h1>LAMON</h1>
          <h6>Eat Like No One Is Watching.</h6>
          <p>Go shop online now! Takout & Delivery</p>
          <Link to="/menu">
            <button className={classes.button}>Order Online</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
