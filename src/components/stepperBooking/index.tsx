import {
  Box,
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography
} from "@mui/material";
import { useState } from "react";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const stepStyle = {
  width: "100%",
  padding: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

interface BookingStepperProps {
  onClose: () => void;
}

const BookingStepper = ({onClose}:BookingStepperProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Confirmar Datos", "Datos de la Clase", "Confirmar Turno"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinalStep = () => {
    setActiveStep(3);
    onClose();
  }

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      case 3:
        return <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} width={"100%"} minWidth={"80vw"} maxWidth={"80vw"}>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }} color={"primary"}>¡Turno Agendado!</Typography>
          <Typography variant="body1" color={"primary"}>Muchas gracias por agendar tu turno y confiar en nosotros.
            ¡Te esperamos!</Typography>

        </Box>

      default:
        return "Unknown step";
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >

      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        bgcolor={"primary.main"}
        paddingY={"1rem"}
      >
        <Typography variant="h4" color={"white"}>
          AGENDAR TURNO
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"1rem"} padding={2} width={"100%"}>
        <Paper
          elevation={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.5rem 3.5rem",
            bgcolor: "secondary.main",
          }}
        >

          <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
            Paper 4 Clases - Caja Manual con Atención a Domicilio
          </Typography>
        </Paper>
      </Box>

      <Stepper activeStep={activeStep} alternativeLabel style={stepStyle}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

     <Box p={3} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} width={"100%"} minWidth={"80vw"} maxWidth={"80vw"}>
  {getStepContent(activeStep)}
  <Box mt={2} display={"flex"} justifyContent={"space-between"} width={"100%"}>
    <Button disabled={activeStep === 0} onClick={handleBack}>
      Atrás
    </Button>
    <Button
      variant="contained"
      color="primary"
      onClick={activeStep === 3 ? handleFinalStep : handleNext}
    >
      {activeStep === steps.length - 1 ? "Confirmar" : activeStep === 3 ? "Finalizar" : "Siguiente"}
    </Button>
  </Box>
</Box>
    </Box>
  );
};
export default BookingStepper;
