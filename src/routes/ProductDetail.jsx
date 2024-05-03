import { Link, useParams } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./ProductDetail.module.css";
import { getProducts } from "./ProductList";

function ProductDetail() {
  const params = useParams();
  const id = params.id;

  const img = getProducts(id).img;
  const title = getProducts(id).title;
  const text = getProducts(id).text;

  return (
    <>
      <Modal>
        <img className={classes.image} src={img} alt={title} />
        <p className={classes.title}>{title}</p>
        <p className={classes.text}>{text}</p>
        <Link to="/products" className={classes.link}>
          <button className={classes.button}>Close</button>
        </Link>
      </Modal>
    </>
  );
}

export default ProductDetail;
