import { localidades } from "@/lib/localidadesCapital";
import CreateIcon from "@mui/icons-material/Create";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import AddressFormText from "./addressFormText";
import { Pack } from "@/services/api";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useCompra } from "./compraContext";
import { useState } from "react";

interface IAddressFormProps {
  handleNext: () => void;
  selectedPack: Pack | null;
}

const AddressForm = ({ handleNext, selectedPack }: IAddressFormProps) => {
  const { updateCompra } = useCompra();
  const [localidad, setLocalidad] = useState("");
  const [direccion, setDireccion] = useState("");

  const onSubmit = () => {
    updateCompra({ pack_id: selectedPack?.id });
    handleNext();
  };

  return (
    <Box display={"flex"} flexDirection={"column"} width={"80%"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
          <DirectionsCarIcon sx={{ width: "40px", height: "40px" }}/>
          <Box>
            <Typography variant="h5" fontWeight={"bold"}>
              {selectedPack?.name}
            </Typography>
            <Typography variant="h5" paragraph>
              {selectedPack?.description}
            </Typography>
          </Box>
        </Box>
        <Typography variant="h5" fontWeight={"bold"}>
          Precio: ${selectedPack?.cost}
        </Typography>
      </Box>

      <AddressFormText />

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
            required
            value={localidad}
            onChange={(e) => setLocalidad(e.target.value)}
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
            label="Dirección:"
            variant="standard"
            required
            onChange={(e) => setDireccion(e.target.value)}
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
