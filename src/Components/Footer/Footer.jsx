import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";
import { Link } from "react-router-dom";

const FooterGrid = ({ children }) => {
  return (
    <div>
      <Box
        sx={{
          background: "#c9c9c9",
          padding: "10px",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={4}>
            <h3>LABURAN BANDA.</h3>
            <p>Todo gira alrededor de tu set-up.</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Link
                to="/about/sobrelb"
                style={{
                  textTransform: "none",
                  color: "#F15A24",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Sobre LB
              </Link>
              <Link
                to="/about/contacto"
                style={{
                  textTransform: "none",
                  color: "#F15A24",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Contacto
              </Link>
              <Link
                to="/about/comocomprar"
                style={{
                  textTransform: "none",
                  color: "#F15A24",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Como comprar
              </Link>
              <Link
                to="/about/faqs"
                style={{
                  textTransform: "none",
                  color: "#F15A24",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                FAQ's
              </Link>
            </ul>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            display="flex"
            justifyContent={"flex-end"}
            alignItems="center"
          >
            <a href="/">
              <TiSocialFacebook color="#f15a24" size={25} />
            </a>
            <a href="/">
              <TiSocialInstagram color="#f15a24" size={25} />
            </a>
            <a href="/ ">
              <TiSocialTwitter color="#f15a24" size={25} />
            </a>
          </Grid>
        </Grid>
      </Box>
      {children}
    </div>
  );
};

export default FooterGrid;
