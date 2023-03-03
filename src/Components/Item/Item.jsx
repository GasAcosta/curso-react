import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Item = ({ element }) => {
  return (
    <Card sx={{ width: 345, height: 460, margin: "10px" }}>
      <CardActionArea>
        <CardMedia sx={{ height: 200 }} image={element.img} alt="image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {element.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            €{element.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {element.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
