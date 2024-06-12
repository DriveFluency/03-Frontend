import { Box, Card, Typography } from "@mui/material";

interface ICardRutaProps {
  icono: string;
  titulo: string;
  descripcion: string;
}

const CardRuta = ({ icono, titulo, descripcion }: ICardRutaProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        bgcolor: "#001D3D",
        boxShadow: "0",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={{
          xs: "2.7rem",
          md: '3.5rem',
          lg: '4.5rem'
        }}
      >
        <img src={icono} width={80} height={80} alt="icono"/>
      </Box>

      <Typography
        variant="h5"
        color="#FFC300"
        fontSize="1rem"
        fontWeight={"800"}
      >
        {titulo}
      </Typography>
      <Typography
        paragraph
        color="#FFFFFF"
        fontSize="1rem"
        fontWeight={"500"}
        sx={{
          width: "100%",
        }}
      >
        {descripcion}
      </Typography>
    </Card>
  );
};

export default CardRuta;
