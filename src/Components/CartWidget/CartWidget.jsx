import { FaShoppingCart } from "react-icons/fa";
import styles from "./CartWidget.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const total = totalQuantity();

  return (
    <Link to="/cart" className={styles.cartWidget}>
      <span className={styles.cantidadCart}>{total}</span>
      <FaShoppingCart color="#f15a24" size={30} />
    </Link>
  );
};

export default CartWidget;
