import { FaShoppingCart } from "react-icons/fa";
import styles from "./CartWidget.module.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart" className={styles.cartWidget}>
      <p className={styles.cantidadCart}>0</p>
      <FaShoppingCart color="#f15a24" size={30} />
    </Link>
  );
};

export default CartWidget;
