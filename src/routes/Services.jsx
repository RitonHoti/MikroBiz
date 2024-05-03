import webdevImg from "../assets/web.png";
import mobiledevImg from "../assets/mobile.png";
import bussinesedevImg from "../assets/business.png";
import azureImg from "../assets/azure.png";
import classes from "./Services.module.css";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <header className={classes.styledlista}>
        <ul className={classes.styledlist}>
          <li>
            <img src={webdevImg} alt="Web Development" />
            <div className={classes.itemcontent}>
              <h3>Web Development</h3>
              <p>
                We build engaging, secure and high performance websites and web
                applications using latest technologies and frameworks across
                platforms.
              </p>
            </div>
          </li>
          <li>
            <img src={mobiledevImg} alt="Mobile Development" />
            <div className={classes.itemcontent}>
              <h3>Mobile Development</h3>
              <p>
                We specializes in mobile application development. We create
                engaging mobile app experiences and visual journeys that delight
                users throughout each step.
              </p>
            </div>
          </li>
          <li>
            <img
              src={bussinesedevImg}
              alt="Bussines Solution and System Integration"
            />
            <div className={classes.itemcontent}>
              <h3>Bussines Solution and System Integration</h3>
              <p>
                We offer the best SME business management solutions and also
                provide system integration to help solve your complex industry
                challenges. SAP Business One QuickBooks Microsoft Dynamics Nav
                Salesforce Stripe MailChimp
              </p>
            </div>
          </li>
          <li>
            <img
              className={classes.imgazure}
              src={azureImg}
              alt="Azure DevOps Support and Maintenance Services"
            />
            <div className={classes.itemcontent}>
              <h3>Azure DevOps Support and Maintenance Services</h3>
              <p>
                Elevate your Azure DevOps experience with our expert support and
                maintenance services. Seamless, reliable solutions tailored to
                keep your operations running smoothly.
              </p>
            </div>
          </li>
        </ul>
        <div className={classes.work}>
          <p>
            <Link to={"/products"}>View something from our work...</Link>
          </p>
        </div>
      </header>
    </>
  );
}

export default Services;
