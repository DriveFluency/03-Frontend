import { localidades } from "@/lib/localidadesCapital";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import PayingMethodFormText from "./payingMethodText";
import AliasCBUInfo from "./aliasCBUInfo";

interface IAddressFormProps {
  handleBack: () => void;
  handleNext: () => void;
}

const PayingMethodForm = ({ handleBack, handleNext }: IAddressFormProps) => {
  return (
    <Box display={"flex"} flexDirection={"column"} width={"80%"}>
      <PayingMethodFormText />

      <form>
        <FormControl>
          {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            defaultValue="efectivo"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="efectivo"
              control={<Radio />}
              label="Efectivo en el punto de encuentro"
            />
            <FormControlLabel
              value="transferencia"
              control={<Radio />}
              label="Transferencia Bancaria"
            />
          </RadioGroup>
        </FormControl>

        <AliasCBUInfo />

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          mt={2}
          alignItems={"center"}
        >
          <Button onClick={handleBack}>Atrás</Button>
          <Button onClick={handleNext}>Siguiente</Button>
        </Box>
      </form>
    </Box>
  );
};

export default PayingMethodForm;
