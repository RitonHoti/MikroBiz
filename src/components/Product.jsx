/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import classes from './Product.module.css';

function Product({ id, title, text }) {
  return (
    <li className={classes.product}>
      <Link to={id}>

        <p className={classes.title}>{title}</p>
        <p className={classes.text}>{text}</p>
      </Link>
    </li>
  );
}

export default Product;