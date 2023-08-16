import classes from "./OurStory.module.css";
import fisherman1 from "../../assets/fisherman1.jpg";
import fisherman2 from "../../assets/fisherman2.jpg";
import farmer1 from "../../assets/farmer1.jpg";
import farmer2 from "../../assets/farmer2.jpg";

const OurStory = () => {
  return (
    <section className={classes["ourStory-section"]}>
      <div className={classes["compiled-images"]}>
        <div className={classes.set1}>
          <div className={classes.box}>
            <img src={farmer1} alt="hardworking fisherman" />
          </div>
          <div className={classes.box}>
            <img src={fisherman2} alt="hardworking farmer" />
          </div>
        </div>
        <div className={classes.set2}>
          <div className={classes.box}>
            <img src={fisherman1} alt="hardworking fisherman" />
          </div>
          <div className={classes.box}>
            <img src={farmer2} alt="hardworking farmer" />
          </div>
        </div>
      </div>
      <div className={classes["ourStory-description"]}>
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
          vivamus arcu felis bibendum ut. Lacinia at quis risus sed vulputate
          odio ut enim blandit. Feugiat nisl pretium fusce id velit ut tortor
          pretium viverra. Mattis rhoncus urna neque viverra.
        </p>
      </div>
    </section>
  );
};

export default OurStory;
