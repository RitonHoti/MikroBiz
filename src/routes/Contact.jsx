import ContactModal from "../components/ContactModal";
import classes from "./Contact.module.css";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <ContactModal>
        <div className={classes.containerContact}>
          <h1>Contact Us</h1>
          <form
              action="https://formspree.io/f/xoqgynrr"
              method="POST"
            className={classes.form}
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />

            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <div className={classes.buttonContainer}>
              <button type="submit" className={classes.button}>
                Send
              </button>
              <button
                type="submit"
                className={classes.closeButton}
                onClick={closeHandler}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </ContactModal>
    </>
  );
}
export default Contact;
