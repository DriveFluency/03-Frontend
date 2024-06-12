import { localidades } from "@/lib/localidadesCapital";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import AddressFormText from "./addressFormText";

interface IAddressFormProps {
  handleNext: () => void;
}

const AddressForm = ({ handleNext }: IAddressFormProps) => {
  const onSubmit = () => {
    handleNext();
  };

  return (
    <Box display={"flex"} flexDirection={"column"} width={"80%"}>

      <AddressFormText/>
      

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

        <Box
          display={"flex"}
          justifyContent={{
            xs: "center",
            md: "flex-end",
          }}
          mt={2}
          alignItems={"center"}
        >
          <Button
            onClick={onSubmit}
            sx={{
              width: {
                xs: "100%",
                md: "auto",
              },
            }}
          >
            Siguiente
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddressForm;
