import classes from "./ProductList.module.css";
import erpImg from "../assets/erp.png";
import eshpenzimetImg from "../assets/eshpenzimetfull.png";
import mrest2016Img from "../assets/mrest2016.jpg";
import suppnetfullImg from "../assets/suppnetfull.jpg";
import hmsMicrobizImg from "../assets/Mikrobiz_HMS.png";
import { Link } from "react-router-dom";


const products = [
  {
    id: "m-rest-2016",
    title: "M-REST 2016",
    img: mrest2016Img,
    text: "M-REST 2016 is a mobile, desktop, and web application designed to improve the way waiters take orders in restaurants. It is very suitable product for restaurant with large hall. It makes very easy for the waiters to take orders with a tablet, and send them to the kitchen without having to go to snack bar to place the order. Innovative in this product is that once order is ready in the kitchen, with a click of a button on a web application (backend of solution) a popup will be displayed on the tablet from where the order was sent. Also there is a module for this app that will enable restaurant managers or owners to monitor in real time orders placed by a waiter or the time it did take to prepare a pizza for instance on the kitchen.",
  },
  {
    id: "supnet-app",
    title: "SuppNet",
    img: suppnetfullImg,
    text: "Suppnet is a mobile and web application designed to improve the way sales teams work. Suppnet is developed with the goal of assisting distributors, wholesalers, manufacturers, and their outside sales teams in improving their sales processes. The application saves businesses costs by eliminating the need for paper catalogs and printed order forms.",
  },
  {
    id: "mikrobiz-erp",
    title: "Mikrobiz Erp",
    img: erpImg,
    text: "MikroBiz ERP is an accounting package dedicated to micro and small businesses. It includes all functionalities needed by a micro and small business.",
  },
  {
    id: "prishtina-digjitale",
    title: "Prishtina Digjitale",
    img: eshpenzimetImg,
    text: "Pristina Digitale is a joint initiative of the Municipality of Pristina, the United Nations Program for Development and Innovation Centre Kosovo (ICK) for Kosovo citizens engaged in improving governance in the city of Prishtina through technology. This is a product that actually serve as PR (Public Relation) solution. It can further be enhanced for the needs of potential clients as mobile CRM, or mobile marketing tool. We developed for the needs of Municipality Of Prishtina. Actually, it contain two main functionalities or modules. It informs citizens about municipality activities and the other purpose is to present information about how budget is spent by the municipality officials. Pristina Digital it is part of the regional initiative Open Ideas.",
  },
  {
    id: "mikrobiz-HMS",
    title: "Mikrobiz HMS",
    img: hmsMicrobizImg,
    text: "MikroBiz HIMS is an application for Hospital, Clinic, Ordinance, or Laboratory Management. Through this application, the management of all activities related to a health institution can be carried out.",
  },
];

function ProductList() {


  return (
    <>
      <ul className={classes.styledlist}>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={"/products/" + product.id} className={classes.title}>
              <img
                className={classes.image}
                src={product.img}
                alt={product.title}
              />
              <p className={classes.title}>{product.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export function getProducts(id){
    const product = products.find((product) => product.id === id)
    return product;
}


export default ProductList;
