import { Link } from "react-router-dom";
import classes from "./Story.module.css";
import image from "../../assets/denilo-farmer.jpg";

const Story = () => {
  return (
    <section className={classes["story-section"]}>
      <div className={classes.content}>
        <h2>Directly from the hardworking farmers and fishermen</h2>
        <p>
          Supporting the workers who are the blood of this country. Chosen the
          unprocessed and original raw ingredients.
        </p>
        <Link to="/ourStory">
          <button>Our Story</button>
        </Link>
      </div>
      <div className={classes.image}>
        <img src={image} alt="happy farmer" />
      </div>
    </section>
  );
};

export default Story;
