import classes from "./Catering.module.css";
import image1 from "../../assets/birthday-occasion.jpg";
import image2 from "../../assets/fine-meat-occasion.jpg";
import image3 from "../../assets/normal-occasion.jpg";
import image4 from "../../assets/normal-occasion2.jpg";
import image5 from "../../assets/outdoor-occasion.jpg";
import image6 from "../../assets/outdoor-occasion2.jpg";
import image7 from "../../assets/party-occasion.jpg";
import image8 from "../../assets/street-occasion.jpg";
import image9 from "../../assets/street-occasion2.jpg";

const Catering = () => {
  return (
    <section className={classes["catering-section"]}>
      <div className={classes["catering-images"]}>
        <div className={classes.heading}>
          <h3>
            Cater <span>Every </span>
            <span>Occasion</span>
          </h3>
        </div>
        <div className={classes["images-box"]}>
          <div className={classes.column}>
            <img src={image1} alt="birthday party occasaion" />
            <img src={image5} alt="birthday party occasaion" />
            <img src={image3} alt="birthday party occasaion" />
          </div>
          <div className={classes.column}>
            <img src={image4} alt="birthday party occasaion" />
            <img src={image2} alt="birthday party occasaion" />
            <img src={image6} alt="birthday party occasaion" />
          </div>
          <div className={classes.column}>
            <img src={image7} alt="birthday party occasaion" />
            <img src={image8} alt="birthday party occasaion" />
            <img src={image9} alt="birthday party occasaion" />
          </div>
        </div>
      </div>
      {/* <div className={classes["catering-content"]}>
        <div className={classes.overlay}></div>
        <div className={classes.content}>
          <h2>We Cater Different Kinds Of Occasions</h2>
        </div>
      </div> */}
    </section>
  );
};

export default Catering;
