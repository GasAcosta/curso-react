import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";

import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";

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
          <Grid
            item
            xs={12}
            sm={4}
            display="flex"
            justifyContent={"flex-end"}
            alignItems="center"
          >
            <ul>
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  color: "#F15A24",
                  fontWeight: "bold",
                }}
              >
                Sobre LB
              </Button>
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  color: "#F15A24",
                  fontWeight: "bold",
                }}
              >
                Contacto
              </Button>
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  color: "#F15A24",
                  fontWeight: "bold",
                }}
              >
                Como comprar
              </Button>
              <Button
                variant="text"
                sx={{
                  textTransform: "none",
                  color: "#F15A24",
                  fontWeight: "bold",
                }}
              >
                FAQ's
              </Button>
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
            <a href="#">
              <TiSocialFacebook color="#f15a24" size={25} />
            </a>
            <a href="#">
              <TiSocialInstagram color="#f15a24" size={25} />
            </a>
            <a href="#">
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
