import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import classes from "./Products.module.css";
import { useState, useEffect } from "react";
import HappyClients from "./HappyClients";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const [happyVisible, setHappyVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const isScrolledToTop = window.scrollY === 0;
      if (isScrolledToTop) {
        navigate("/products");
        setHappyVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigate, happyVisible]);


  useEffect(() => {
    if (happyVisible) {
      const happyClientsSection = document.getElementById(
        "happyClientsSection"
      );
      if (happyClientsSection) {
        const topOffset = happyClientsSection.offsetTop;
        window.scrollTo({
          top: topOffset - 50,
          behavior: "smooth",
        });
      }
    }
    else{
      const topOfPage = window.scrollY === 0;
      window.scrollTo({
        top: topOfPage ,
        behavior: "smooth",
      });
    }
  }, [happyVisible]);

  function OpenDiv() {
    setHappyVisible(!happyVisible);
    navigate(happyVisible ? "/products" : "/products/happyClients");
  }

  return (
    <>
      <header>
        <ProductList />
        <div className={classes.work}>
          {happyVisible ? (
            <p onClick={OpenDiv}>
              <Link to={"/products/happyClients"}>Hide happy Clients...</Link>
            </p>
          ) : (
            <p onClick={OpenDiv}>
              <Link to={"/products/happyClients"}>
                View some of our happy Clients...
              </Link>
            </p>
          )}
        </div>
        <div>
          {happyVisible && (
            <div id="happyClientsSection" className={classes.hapyClient}>
              <HappyClients />
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Products;
