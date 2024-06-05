import { Box, Button, Typography } from "@mui/material";

const ConfirmationMessage = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} width={'80%'}>
      <Typography variant="h6" fontSize={25} textAlign={"center"} gutterBottom>
        ¡MUCHAS GRACIAS POR TU COMPRA!
      </Typography>
      <Typography paragraph textAlign={"center"} width={"80%"}>
        Ya podés coordinar el turno de tus clases y empezar a conducir de la
        mano de nuestros instructores. Presioná Agendar turno y comenzá el
        camino hacia tu carnet de conducir.
      </Typography>

      <Box
        display={"flex"}
        justifyContent={{
          xs: "center",
          md: "flex-end",
        }}
        mt={1}
        width={'75%'}
      >
        <Button
        variant="contained"
          sx={{
            width: {
              xs: "100%",
              md: "auto",
            },
          }}
        >
          Agendar Turno
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmationMessage;
