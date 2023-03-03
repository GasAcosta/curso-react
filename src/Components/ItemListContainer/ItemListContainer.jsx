import { useState, useEffect } from "react";
import { products } from "../../ProductsMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(products);
      reject("No se encontraron productos.");
    });

    productList
      .then((resolve) => {
        setItem(resolve);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", backgroundColor: "#FABA8A", padding: "5px" }}>
      <h1>LABURAN BANDA.</h1>
      <p>Todo gira alrededor de tu set-up.</p>
      <ItemList item={item} />
    </div>
  );
};

export default ItemListContainer;
