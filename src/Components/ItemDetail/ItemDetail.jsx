import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({productFound, Img, productQuantity, onAdd}) => {
  return (
    <div
      style={{
        textAlign: "center",
        alignItems: "center",
        padding: "30px",
        backgroundColor: "#FABA8A",
        minHeight: "100vh"
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
  )
}

export default ItemDetail
