import { Box, Button } from "@mui/material";
import Link from "next/link";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage = "/img/wallpapers/heroImagen.jpg";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      <Box sx={{ textAlign: "center", marginRight: {xs: 0, md: "125px" } }} >
        <Typography color="inherit" variant="h2" sx={{ fontSize: "50px", fontWeight: 900}}>
          pierde el miedo y <br /> aprende a conducir
        </Typography>
        <Typography
          color="secondary.main"
          align="center"
          variant="h5"
          sx={{ fontSize: "45px", textTransform: "uppercase", fontWeight: 900 }}
        >
          ¡Empieza hoy!
        </Typography>
        <Button
          variant="contained"
          size="large"

          sx={{ minWidth: 200, textTransform: "none", fontSize: "28px", marginTop: "27px" }}
        >
          {/* <a href="/#pack-de-clases">Ver Packs de Clases</a> */}
          <Link href="/#pack-de-clases">Ver Packs de Clases</Link>
          
        </Button>

      </Box>

    </ProductHeroLayout>
  );
}
