import React from "react";
import CardComment from "@/container/CardComment";
import { TextareaAutosize } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import DashboardLayout from '@/layouts/DashboardLayout';
import useTokenValidation from "@/hooks/useTokenValidation";

const comments = [
  {
    avatar: "R",
    title: "Rice and Beans",
    subheader: "September 14, 2016",
  },
  {
    avatar: "S",
    title: "Shrimp and Chorizo Paella",
    subheader: "September 14, 2016",
  },
  {
    avatar: "T",
    title: "Tiramisu",
    subheader: "September 14, 2016",
  },
];

const ProductComments = () => {

  useTokenValidation();

  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      component="section"
      sx={{
        my: 10,
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
      }}
    >
      <Grid container>
        <Grid item xs={12} md={8} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "primary.main",
              py: 8,
              px: 3,
              position: "relative",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                maxWidth: 800,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  color: "secondary.main",
                  fontSize: "1.5rem",
                  fontWeight: 900,
                }}
              >
                ¿YA TUVISTE CLASES CON NOSOTROS?
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "common.white",
                  fontSize: "1.5rem",
                  textTransform: "Capitalize",
                }}
              >
                ¡Cuentanos tu experiencia!
              </Typography>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Dejanos tu comentario..."
                minRows={3}
                style={{
                  width: "100%",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                  padding: "1rem",
                  borderRadius: "4px",
                }}
              />
              <Button
                sx={{
                  backgroundColor: "secondary.main",
                  fontWeight: 900,
                  fontSize: "1rem",
                  padding: ".7rem 2rem",
                }}
              >
                ENVIAR COMENTARIO
              </Button>
            </Box>
            <Box
              id="commentsinWeb"
              sx={{ display: { md: "block", xs: "none" } }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0%",
                  left: "115%",
                  transform: "translate(-50%, -50%)",
                  width: "max-content",
                  height: "max-content",
                }}
              >
                <CardComment key={comments[0].title} {...comments[0]} />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "40%",
                  left: "145%",
                  transform: "translate(-50%, -50%)",
                  width: "max-content",
                  height: "max-content",
                }}
              >
                <CardComment key={comments[1].title} {...comments[1]} />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "80%",
                  left: "125%",
                  transform: "translate(-50%, -50%)",
                  width: "max-content",
                  height: "max-content",
                }}
              >
                <CardComment key={comments[2].title} {...comments[2]} />
              </div>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: "100%",
            }}
          />
          <Box
            component="img"
            src="img/wallpapers/wallpaper-comments.svg"
            alt="call to action"
            sx={{
              position: "absolute",
              top: 15,
              left: -180,
              right: 0,
              bottom: 0,
              width: "100%",
              transform: "scale(2)",
            }}
          />
        </Grid>
      </Grid>
      <Box id="commentsinMobile" sx={{ display: { md: "none", xs: "flex" }, flexDirection: "column", gap: 2, mt: 4 }}>
        <CardComment key={comments[0].title} {...comments[0]} />
        <CardComment key={comments[1].title} {...comments[1]} />
        <CardComment key={comments[2].title} {...comments[2]} />
      </Box>
    </Container>
  );
};

const Testimonios = () => {
  return (
    <DashboardLayout>
      <h1>Testimonios</h1>
      <ProductComments />
    </DashboardLayout>
  );
};

export default Testimonios;
