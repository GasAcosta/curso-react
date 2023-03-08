import { useState, useEffect } from "react";
import { products } from "../../ProductsMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const productCategory = products.filter((element) => element.category === category);
  const [item, setItem] = useState([]);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(category ? productCategory : products);
      reject("No se encontraron productos.");
    });

    productList
      .then((resolve) => {
        setItem(resolve);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <div style={{ textAlign: "center", backgroundColor: "#FABA8A", padding: "5px" }}>
      <h1>LABURAN BANDA.</h1>
      <p>Todo gira alrededor de tu set-up.</p>
      <ItemList item={item} />
    </div>
  );
};

export default ItemListContainer;
