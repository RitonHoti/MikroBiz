import classes from "./Footer.module.css";
import fbLogo from "../assets/fbIcon.png";
import instaLogo from "../assets/instaIcon.png";
import mail from "../assets/mail.png";
import LinkInLogo from "../assets/linkedInIcon.png";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <footer className={classes.container}>

      <div className={classes.box}>
        <h2>Email</h2>
        <span>
          <a href="mailto:info@mikrobiz-ks.com">
            <img src={mail} />
            info@mikrobiz-ks.com
          </a>
        </span>
      </div>
      <div className={classes.box}>
        <h2>Follow us</h2>
        <p className={classes.border}></p>
        <Link to="https://www.facebook.com/mikrobiz">
          <img src={fbLogo} alt="Facebook" />
        </Link>
        <Link to="https://www.instagram.com/mikrobiz_it/">
          <img src={instaLogo} alt="Instagram" />
        </Link>
        <Link to="">
          <img src={LinkInLogo} alt="LinkedIn" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
