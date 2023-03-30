import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import ItemCount from "../ItemCount/ItemCount";
import { getDoc, collection, doc } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { db } from "../../firebaseConfig";
import { CartContext } from "../../Context/CartContext";

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
    <div
      style={{
        textAlign: "center",
        alignItems: "center",
        padding: "30px",
        backgroundColor: "#FABA8A",
      }}
    >
      <Paper
        sx={{
          p: 2,
          alignItems: "center",
          margin: "auto",
          maxWidth: "auto",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img alt="complex" src={productFound.img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid
              item
              xs
              container
              direction="column"
              spacing={2}
              sx={{ textAlign: "start" }}
            >
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  {productFound.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {productFound.description}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="h5">
                  <ItemCount
                    stock={productFound.stock}
                    onAdd={onAdd}
                    initial={productQuantity}
                  />
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                component="div"
                style={{ fontWeight: "bold", color: "#F15A24" }}
              >
                €{productFound.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ItemDetailContainer;
