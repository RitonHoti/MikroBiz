import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import classes from "./MainNavigation.module.css";
import logoMikrobiz from "../assets/logo_mikobiz.png";

function MainNavigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${classes.header} ${isMenuOpen ? classes.open : ""}`}>
      <nav className={classes.navbar}>
        <div className={classes.hamburger} onClick={toggleMenu}>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </div>
        <ul className={`${classes.menu} ${isMenuOpen ? classes.show : ""}`}>
          <motion.li
            whileHover={{
              scale: 1.1,
            }}
            className={location.pathname === "/" ? classes.active : ""}
          >
            <Link to="/" onClick={closeMenu}>Home Page</Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
            }}
            className={
              location.pathname === "/services" ? classes.active : ""
            }
          >
            <Link to="/services" onClick={closeMenu}>Services</Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
            }}
            className={
              location.pathname === "/products" ? classes.active : ""
            }
          >
            <Link to="/products" onClick={closeMenu}>Products</Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
            }}
            className={location.pathname === "/about" ? classes.active : ""}
          >
            <Link to="/about" onClick={closeMenu}>About</Link>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.1,
            }}
            className={
              location.pathname === "/contact-us" ? classes.active : ""
            }
          >
            <Link to="/contact-us" onClick={closeMenu}>Contact</Link>
          </motion.li>
        </ul>
        <Link to="/" className={classes.logo} onClick={closeMenu}>
          <img src={logoMikrobiz} alt="Mikrobiz-Home Page" />
        </Link>
      </nav>
    </header>
  );
}

export default MainNavigation;
