import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={classes["footer-section"]}>
      <div className={classes.details}>
        <div className={classes["contact-details"]}>
          <h6>Contact Us</h6>
          <p>123-456-7890</p>
          <p>visit@mysite.com</p>
        </div>
        <div className={classes.address}>
          <h6>Address</h6>
          <p>123-Street</p>
          <p>Atalantis City, Bermuda 123</p>
        </div>
        <div className={classes["opening-hours"]}>
          <h6>Opening Hours</h6>
          <p>Mon - Fri: 8am - 8pm</p>
          <p>Saturday: 9am - 7pm</p>
          <p>Sunday: 9am - 8pm</p>
        </div>
      </div>
      <div className={classes.subscribe}>
        <div className={classes["form-box"]}>
          <label>Subscribe Now!</label>
          <div className={classes["subscribe-container"]}>
            <input type="text" defaultValue="Enter your email" />
            <button>Join</button>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>
          &copy; This is a test website only. Created for enhancing the skills
          of the creator.
        </p>
      </div>
    </section>
  );
};

export default Footer;
