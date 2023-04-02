import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = ({ children }) => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#c9c9c9",
          padding: "10px",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Link to="/">
              <img
                src="https://res.cloudinary.com/ddxobed7l/image/upload/v1676982256/curso-react/LaburanBandaLogo_pvuph9.png"
                alt="logo-laburan-banda"
              />
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ul style={{ display: "flex", justifyContent: "space-around" }}>
              <Link
                to="/"
                variant="text"
                style={{
                  textTransform: "none",
                  color: "#F15A24",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Inicio
              </Link>
              <Link
                to="/category/gaming"
                variant="text"
                style={{
                  textTransform: "none",
                  color: "#F15A24",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Gaming
              </Link>
              <Link
                to="/category/oficina"
                variant="text"
                style={{
                  textTransform: "none",
                  color: "#F15A24",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Oficina
              </Link>
              <Link
                to="/category/ocio"
                variant="text"
                style={{
                  textTransform: "none",
                  color: "#F15A24",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Ocio
              </Link>
            </ul>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CartWidget />
          </Grid>
        </Grid>
      </Box>
      {children}
    </div>
  );
};

export default NavBar;
