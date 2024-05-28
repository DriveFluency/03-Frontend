import React from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "../components/Typography";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  { question: '¿Cuál es la edad mínima para aprender a conducir?', answer: 'La edad mínima para aprender a conducir es 18 años.' },
  { question: '¿Los autos con los que se dictan las clases, poseen doble comando?', answer: 'Sí, todos nuestros autos poseen doble comando para mayor seguridad.' },
  { question: '¿Cuántas clases de manejo necesitaré antes de poder tomar el examen?', answer: 'El número de clases necesarias varía según el estudiante, pero en promedio se recomiendan 15 a 20 clases.' },
  { question: '¿Cuál es la duración de cada clase de manejo?', answer: 'Cada clase de manejo tiene una duración de 45 minutos.' },
  { question: '¿Ofrecen clases de manejo para personas con discapacidades?', answer: 'Sí, ofrecemos clases de manejo adaptadas para personas con discapacidades.' },
];

function ProductHowItWorks() {
  return (
    <Box id="preguntas-frecuentes"
      component="section" 
      sx={{ 
        display: "flex", 
        bgcolor: "secondary.light", 
        overflow: "hidden", 
        backgroundImage: 'url("../../img/preguntasfrecuentes.png")', // Replace with the path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14, textAlign: 'center' }}>
          PREGUNTAS FRECUENTES
        </Typography>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            {faqs.map((faq, index) => (
              <Accordion key={index} sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;


