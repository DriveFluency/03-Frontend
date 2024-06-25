import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { BookingStepProps } from '.';
const StepThree = ({ formData: formDataStepThree, setFormData: setFormDataStepThree }: BookingStepProps) => {

    return (
        <Box sx={{ '& .MuiTextField-root': { m: 1 }, p: 2 }}>
            <Typography variant="h6" gutterBottom>
                <EventRepeatIcon /> Resumen de la Agenda de tu Turno
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField variant="standard" label="DNI" fullWidth value={formDataStepThree?.dni} InputProps={{ readOnly: true }} />
                    <TextField variant="standard" label="Teléfono" fullWidth value={formDataStepThree?.telefono} InputProps={{ readOnly: true }} />
                    <TextField variant="standard" label="Instructor" fullWidth value={formDataStepThree?.instructor} InputProps={{ readOnly: true }} />
                </Grid>
                <Grid item xs={6}>
                    <TextField variant="standard" label="Curso Contratado" fullWidth value={formDataStepThree?.cursoContratado} InputProps={{ readOnly: true }} />
                    <TextField variant="standard" label="Barrio" fullWidth value={formDataStepThree?.barrio} InputProps={{ readOnly: true }} />
                    <TextField variant="standard" label="Dirección" fullWidth value={formDataStepThree?.direccion} InputProps={{ readOnly: true }} />
                    <TextField
                        variant="standard"
                        label="Horario"
                        name="horario"
                        fullWidth
                        value={`${formDataStepThree?.startTime} - ${formDataStepThree?.endTime}`}
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default StepThree;
