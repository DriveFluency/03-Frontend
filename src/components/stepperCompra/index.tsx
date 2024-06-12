import { Box, Container, Paper, Step, StepLabel, Stepper } from "@mui/material";
import { ReactNode, useState } from "react";
import AddressForm from "./addressForm";
import PayingMethodForm from "./payingMethodForm";
import ConfirmationMessage from "./confirmationMessage";
import { bgcolor, padding } from "@mui/system";

const stepStyle = {
  marginTop: 2,
  padding: 3,
  "& .Mui-active": {
    "&.MuiStepIcon-root": {
      color: "secondary.main",
    },
  },
  "& .Mui-completed": {
    "&.MuiStepIcon-root": {
      color: "secondary.main",
    },
  },
};

const CompraStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Descripción del Pack", "Método de Pago"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (stepIndex: number): ReactNode => {
    switch (stepIndex) {
      case 0:
        return <AddressForm handleNext={handleNext} />;
      case 1:
        return (
          <PayingMethodForm handleNext={handleNext} handleBack={handleBack} />
        );
      case 2:
        return <ConfirmationMessage />;
    }
  };

  return (
      <Container component={"section"}>
        <Paper>
          <Stepper activeStep={activeStep} alternativeLabel sx={stepStyle}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box p={3} display={"flex"} justifyContent={"center"}>
            {getStepContent(activeStep)}
          </Box>
        </Paper>
      </Container>

  );
};
export default CompraStepper;
