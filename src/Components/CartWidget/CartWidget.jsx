import { FaShoppingCart } from "react-icons/fa";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  return (
    <div className={styles.cartWidget}>
      <p className={styles.cantidadCart}>0</p>
      <FaShoppingCart color="#f15a24" size={30} />
    </div>
  );
};

export default CartWidget;
