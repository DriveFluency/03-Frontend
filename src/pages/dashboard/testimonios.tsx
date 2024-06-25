import React, { useState } from 'react';
import CardComment from '@/container/CardComment';
import { TextareaAutosize } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@/components/Button';
import Typography from '@/components/Typography';
import DashboardLayout from '@/layouts/DashboardLayout';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const comments = [
  {
    avatar: 'R',
    title: 'Rice and Beans',
    subheader: 'September 14, 2016',
  },
  {
    avatar: 'S',
    title: 'Shrimp and Chorizo Paella',
    subheader: 'September 14, 2016',
  },
  {
    avatar: 'T',
    title: 'Tiramisu',
    subheader: 'September 14, 2016',
  },
];

const ProductComments = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundImage: 'url(/img/wallpapers/testimonio.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container component="section" sx={{ my: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'primary.main',
                py: 8,
                px: 3,
                maxWidth: 800,
                mx: 'auto', // Para centrar horizontalmente
                borderRadius: 2, // Añadido para darle un poco de redondeo al cuadro
              }}
            >
              <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
                <Typography variant="h4" gutterBottom sx={{ color: 'secondary.main', fontSize: '1.5rem', fontWeight: 900, textAlign: 'center' }}>
                  ¿YA TUVISTE CLASES CON NOSOTROS?
                </Typography>
                <Typography variant="h4" sx={{ color: 'common.white', fontSize: '1.5rem', textAlign: 'center' }}>
                  ¡Cuéntanos tu experiencia!
                </Typography>
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Déjanos tu comentario..."
                  minRows={3}
                  style={{
                    width: '100%',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    padding: '1rem',
                    borderRadius: '4px',
                  }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button type="submit" sx={{ backgroundColor: 'secondary.main', fontWeight: 900, fontSize: '1rem', padding: '.7rem 2rem' }}>
                    ENVIAR COMENTARIO
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box id="commentsinWeb" sx={{ mt: 4, width: '100%' }}>
          <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
            {comments.map((comment, index) => (
              <div key={index}>
                <CardComment {...comment} />
              </div>
            ))}
          </Carousel>
        </Box>
        <Box id="commentsinMobile" sx={{ display: { md: 'none', xs: 'flex' }, flexDirection: 'column', gap: 2, mt: 4 }}>
          {comments.map((comment) => (
            <CardComment key={comment.title} {...comment} />
          ))}
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{ sx: { maxWidth: '400px', textAlign: 'center', borderRadius: '10px', overflow: 'hidden' } }}
        >
          <Box sx={{ bgcolor: '#072146', color: 'white', py: 1 }}>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
              ¡HEMOS RECIBIDO TU COMENTARIO!
            </Typography>
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              ¡MUCHAS GRACIAS!
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Todo comentario nos sirve para seguir creciendo y dar siempre la mejor atención.
            </Typography>
          </Box>
          <DialogActions sx={{ justifyContent: 'center' }}>
            <Button onClick={handleClose} sx={{ color: '#072146' }}>
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

const Testimonios = () => {
  return (
    <DashboardLayout>
      <ProductComments />
    </DashboardLayout>
  );
};

export default Testimonios;
