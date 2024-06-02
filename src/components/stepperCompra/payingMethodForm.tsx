import { localidades } from "@/lib/localidadesCapital";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
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
        <Box
          display={"flex"}
          flexDirection={{
            xs: "column",
            md: "row",
          }}
          alignItems={"center"}
          justifyContent={"space-around"}
          gap={5}
        >
          <TextField
            select
            label={"Localidad"}
            sx={{
              width: {
                xs: "100%",
                md: "40%",
              },
            }}
          >
            {localidades.map((localidad) => (
              <MenuItem key={localidad.value} value={localidad.value}>
                {localidad.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label={"Dirección:"}
            variant="standard"
            sx={{
              width: {
                xs: "100%",
                md: "60%",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CreateIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <AliasCBUInfo/>

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