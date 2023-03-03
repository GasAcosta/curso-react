import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ element }) => {
  return (
    <Card sx={{ width: 345, height: 460, margin: "40px" }}>
      <CardActionArea>
        <CardMedia sx={{ height: 200 }} image={element.img} alt="image" />
        <CardContent>
          <Typography variant="h5" component="div">
            {element.title}
          </Typography>
          <Typography
            color="text.primary"
            style={{ fontWeight: "bold", color: "#F15A24" }}
          >
            €{element.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {element.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ alignItems: "center" }}>
          <ItemCount />
      </CardActions>
    </Card>
  );
};

export default Item;
