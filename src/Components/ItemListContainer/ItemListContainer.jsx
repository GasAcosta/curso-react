import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import HashLoader from "react-spinners/HashLoader";

const ItemListContainer = () => {
  const { category } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "products");
    let consultaBack = undefined;
    if (category) {
      const q = query(itemsCollection, where("category", "==", category));
      consultaBack = getDocs(q);
    } else {
      consultaBack = getDocs(itemsCollection);
    }

    consultaBack.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setItem(products);
    });
  }, [category]);

  if (item.length === 0) {
    return (
      <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#FABA8A", minHeight: "500px", alignItems: "center" }}>
        <HashLoader color="#F15A24" size={200} />
      </div>
    );
  }

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#FABA8A",
        padding: "5px",
      }}
    >
      <h1>LABURAN BANDA.</h1>
      <p>Todo gira alrededor de tu set-up.</p>
      <ItemList item={item} />
    </div>
  );
};

export default ItemListContainer;
