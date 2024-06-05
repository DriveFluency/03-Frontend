import {
  Box,
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { ReactNode, useState } from "react";
import AddressForm from "./addressForm";
import PayingMethodForm from "./payingMethodForm";
import ConfirmationMessage from "./confirmationMessage";
import { bgcolor, padding } from "@mui/system";
import Link from "next/link";
import Image from "next/image";
import { Pack } from "@/views/DialogPayment";

const stepStyle = {
  marginTop: 3,
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

interface CompraStepperProps {
  selectedPack: Pack | null;
}

const CompraStepper = ({ selectedPack }: CompraStepperProps) => {
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
        return (
          <AddressForm handleNext={handleNext} selectedPack={selectedPack} />
        );
      case 1:
        return (
          <PayingMethodForm
            handleNext={handleNext}
            handleBack={handleBack}
            selectedPack={selectedPack}
          />
        );
      case 2:
        return <ConfirmationMessage />;
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={"1rem"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        bgcolor={"primary.main"}
        paddingY={"1rem"}
      >
        <Typography variant="h4" color={"white"}>
          Comprar Pack
        </Typography>
      </Box>

      {/* <Link href={"/dashboard"}>
            <Image
              src={"/icons/arrow_back.png"}
              width={60}
              height={60}
              alt="go back arrow"
            />
          </Link> */}

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
          {selectedPack?.title} - {selectedPack?.description}
        </Typography>
      </Paper>

      <Paper elevation={2}>
        <Stepper activeStep={activeStep} alternativeLabel sx={stepStyle}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box
          p={3}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          {getStepContent(activeStep)}
        </Box>
      </Paper>
    </Box>
  );
};
export default CompraStepper;
