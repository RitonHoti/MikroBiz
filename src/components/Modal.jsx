/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import classes from "./Modal.module.css";

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("/products");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <motion.dialog
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        className={classes.modal}
      >
        {children}
      </motion.dialog>
    </>
  );
}

export default Modal;
