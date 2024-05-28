import CardRuta from "@/components/CardRuta";
import rutas from "@/lib/rutas";
import { Box, Divider, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const ComienzaTuRuta = () => {
  return (
    <Box id="ruta-al-volante"
      sx={{
        bgcolor: "#001D3D",
        paddingBottom: "4rem",
      }}
    >
      <Container component="section">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "2rem",
          }}
        >
          <Typography
            variant="h5"
            color="#FFC300"
            fontWeight={600}
            fontSize={{
              xs: "1.1rem",
              sm: "1.5rem",
              md: "2.2rem",
            }}
            sx={{
              display: "flex",
              justifyContent: {
                xs: "flex-start",
                sm: "center",
              },
              alignItems: "center",
              height: {
                xs: "4rem",
                sm: "4.5rem",
                md: "7rem",
              },
              width: "100%",
              paddingX: "1.5rem",
              textShadow: "0px 2px #000000",
            }}
          >
            ¡COMIENZA TU RUTA AL VOLANTE!
          </Typography>

          {/* <Triangles /> */}

          <Divider
            sx={{
              bgcolor: "#FFC300",
              height: "3px",
              marginBottom: "2rem",
              width: {
                xs: "100%",
                sm: "75%",
              },
            }}
          />
          <Grid container spacing={2} justifyContent="center">
            {rutas.map((ruta, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <CardRuta
                  icono={ruta.icono}
                  titulo={ruta.titulo}
                  descripcion={ruta.descripcion}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ComienzaTuRuta;
