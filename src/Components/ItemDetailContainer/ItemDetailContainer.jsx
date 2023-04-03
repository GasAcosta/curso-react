import { useParams } from "react-router-dom";
import { getDoc, collection, doc } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { db } from "../../firebaseConfig";
import { CartContext } from "../../Context/CartContext";
import ItemDetail from "../ItemDetail/ItemDetail";
import { styled } from "@mui/material/styles";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productFound, setProductFound] = useState({});
  const { agregarCarrito, getProductQuantity } = useContext(CartContext);
  let productQuantity = getProductQuantity(id);

  const onAdd = (cantidad) => {
    let producto = {
      ...productFound,
      quantity: cantidad,
    };
    agregarCarrito(producto);
  };

  useEffect(() => {
    const itemsCollection = collection(db, "products");
    const ref = doc(itemsCollection, id);
    getDoc(ref).then((res) => {
      setProductFound({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <ItemDetail productFound={productFound} Img={Img} productQuantity={productQuantity} onAdd={onAdd} />
  );
};

export default ItemDetailContainer;
