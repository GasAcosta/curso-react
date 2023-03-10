import { useParams } from "react-router-dom";
import { products } from "../../ProductsMock";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const productFound = products.find((element) => element.id === Number(id));

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
                <Typography gutterBottom variant="h5" component="div">
                  {productFound.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {productFound.description}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  <ItemCount stock={productFound.stock} />
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                component="div"
                style={{ fontWeight: "bold", color: "#F15A24" }}
              >
                <p>???{productFound.price}</p>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ItemDetailContainer;
