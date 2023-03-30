import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <Card sx={{ width: 345, height: 370, margin: "30px", alignItems: "center"}}>
      <CardMedia sx={{ height: 200, margin: "3px" }} image={element.img} alt="image" />
      <CardContent>
        <Typography variant="h5">
          {element.title}
        </Typography>
        <Typography
          color="text.primary"
          style={{ fontWeight: "bold", color: "#F15A24" }}
        >
          €{element.price}
        </Typography>
      </CardContent>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2">
            <Link
              to={`/detalle/${element.id}`}
              style={{
                textTransform: "none",
                color: "#F15A24",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Ver más detalles
            </Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
