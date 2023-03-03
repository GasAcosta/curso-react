import { Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import CartWidget from "../CartWidget/CartWidget";

const NavBarGrid = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#c9c9c9",
        padding: "10px",
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={4}>
          <img
            src="https://res.cloudinary.com/ddxobed7l/image/upload/v1676982256/curso-react/LaburanBandaLogo_pvuph9.png"
            alt="logo-laburan-banda"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ul>
            <Button
              variant="text"
              sx={{
                textTransform: "none",
                color: "#F15A24",
                fontWeight: "bold",
              }}
            >
              Inicio
            </Button>
            <Button
              variant="text"
              sx={{
                textTransform: "none",
                color: "#F15A24",
                fontWeight: "bold",
              }}
            >
              Ofertas
            </Button>
            <Button
              variant="text"
              sx={{
                textTransform: "none",
                color: "#F15A24",
                fontWeight: "bold",
              }}
            >
              Gaming
            </Button>
            <Button
              variant="text"
              sx={{
                textTransform: "none",
                color: "#F15A24",
                fontWeight: "bold",
              }}
            >
              Oficina
            </Button>
            <Button
              variant="text"
              sx={{
                textTransform: "none",
                color: "#F15A24",
                fontWeight: "bold",
              }}
            >
              Ocio
            </Button>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4} display="flex"
          justifyContent={"flex-end"}
          alignItems="center">
          <CartWidget />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NavBarGrid;
