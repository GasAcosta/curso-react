import { products } from "../../ProductsMock";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className={styles.itemWelcome}>
      <h1>LABURAN BANDA.</h1>
      <p>Todo gira alrededor de tu set-up.</p>
      <p>¡Hola, {greeting}!</p>
    </div>
  );
};

export default ItemListContainer;
