import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "../components/Typography";

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mr: 1,
};

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "primary.main" }}
    >
      <Container sx={{ my: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                gutterBottom
                sx={{ color: "secondary.main", fontSize: 15, fontWeight: 700}}
              >
                SIGUE NUESTRAS REDES SOCIALES
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Box sx={iconStyle}>
                  <img
                    src="/icons/facebook.svg"
                    alt="facebook"
                    width={48}
                    height={48}
                  />
                </Box>
                <Box sx={iconStyle}>
                  <img
                    src="/icons/instagram.svg"
                    alt="instagram"
                    width={45}
                    height={48}
                  />
                </Box>
                <Box sx={iconStyle}>
                  <img
                    src="/icons/linkedIn.svg"
                    alt="twitter"
                    width={48}
                    height={48}
                  />
                </Box>
                <Box sx={iconStyle}>
                  <img
                    src="/icons/tiktok.svg"
                    alt="youtube"
                    width={48}
                    height={48}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: "secondary.main" ,fontSize: 22, fontWeight: 700}}
              >
                DRIVE FLUENCY
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{ color: "secondary.light", fontSize: 22, fontWeight: 700}}
              >
                APRENDÉ A CONDUCIR
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}