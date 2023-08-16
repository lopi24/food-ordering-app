import classes from "./TheRestaurant.module.css";
import restaurantPic1 from "../../assets/the-restaurant1.jpg";
import restaurantPic2 from "../../assets/the-restaurant2.jpg";

const TheRestaurant = () => {
  return (
    <section className={classes["restaurant-section"]}>
      <div className={classes["restaurant-description"]}>
        <h2>The Restaurant</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
          vivamus arcu felis bibendum ut. Lacinia at quis risus sed vulputate
          odio ut enim blandit. Feugiat nisl pretium fusce id velit ut tortor
          pretium viverra. Mattis rhoncus urna neque viverra. Dolor sit amet
          consectetur adipiscing. Felis imperdiet proin fermentum leo vel orci
          porta non pulvinar. Ante metus dictum at tempor commodo ullamcorper a.
          Tincidunt augue interdum velit euismod in pellentesque.
        </p>
      </div>
      <div className={classes["compiled-images"]}>
        <div className={classes.set}>
          <div className={classes.box}>
            <img src={restaurantPic1} alt="restaurant" />
          </div>
          <div className={classes.box}>
            <img src={restaurantPic2} alt="restaurant" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheRestaurant;
