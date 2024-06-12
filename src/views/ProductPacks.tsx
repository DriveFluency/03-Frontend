import CardPack from "@/container/CardPack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "../components/Typography";

const packsAutomat = [
  {
    image: "https://medias.spotern.com/spots/w640/51/51112-1581937236.jpg",
    caption: "Pack 1",
    title: "Pack 1",
    description: "10 clases de manejo en caja automática",
  },
  {
    image: "https://medias.spotern.com/spots/w640/51/51112-1581937236.jpg",
    caption: "Pack 2",
    title: "Pack 2",
    description: "15 clases de manejo en caja automática",
  },
  {
    image: "https://medias.spotern.com/spots/w640/51/51112-1581937236.jpg",
    caption: "Pack 3",
    title: "Pack 3",
    description: "20 clases de manejo en caja automática",
  },
];

const packsManual = [
  {
    image: "https://medias.spotern.com/spots/w640/51/51112-1581937236.jpg",
    caption: "Pack 1",
    title: "Pack 1",
    description: "10 clases de manejo en caja manual",
  },
  {
    image: "https://medias.spotern.com/spots/w640/51/51112-1581937236.jpg",
    caption: "Pack 2",
    title: "Pack 2",
    description: "15 clases de manejo en caja manual",
  },
  {
    image: "https://medias.spotern.com/spots/w640/51/51112-1581937236.jpg",
    caption: "Pack 3",
    title: "Pack 3",
    description: "20 clases de manejo en caja manual",
  },
  {
    image: "https://medias.spotern.com/spots/w640/51/51112-1581937236.jpg",
    caption: "Pack 4",
    title: "Pack 4",
    description: "20 clases de manejo en caja manual",
  },
];

export default function ProductPacks() {
  return (
    <Box id="pack-de-clases" sx={{
      pb: 8,
      backgroundImage: `url('img/wallpapers/section-packs.svg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center -8px",
    }}>
    <Container
      component="section"
    >
      <Typography variant="h4" marked="center" align="center" component="h2" sx={{color: "white"}}>
        ¡ELEGÍ TU PACK DE MANEJO!
      </Typography>
      <Typography variant="h5" marked="center" align="center" component="h3" sx={{color: "white"}}>
        ¡PODÉS PRACTICAR EL RECORRIDO DE LA COMUNA DONDE RENDÍS!
      </Typography>

      
        <Typography
          variant="h5"
          marked="center"
          fontWeight={700}
          align="center"
          sx={{
            backgroundColor: "secondary.main",
            padding: ".6rem 5rem",
            borderRadius: 2,
            width: "fit-content",
            margin: "1rem auto",
          }}
        >
          Packs con Caja Automática
        </Typography>

      <Grid container sx={{ mt: 4, justifyContent: "space-around" }}>
        {packsAutomat.map((pack) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            key={pack.title}
            sx={{ minWidth: 250 }}
          >
            <CardPack key={pack.title} {...pack} />
          </Grid>
        ))}
      </Grid>

        <Typography
          variant="h5"
          marked="center"
          fontWeight={700}
          align="center"
          sx={{
            backgroundColor: "secondary.main",
            padding: ".6rem 5rem",
            borderRadius: 2,
            width: "fit-content",
            margin: "1rem auto",
          }}
        >
          Packs con Caja Manual
        </Typography>

      <Grid container sx={{ mt: 4, justifyContent: "space-around" }}>
        {packsManual.map((pack) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            key={pack.title}
            sx={{ minWidth: 245 }}
          >
            <CardPack {...pack} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
}
