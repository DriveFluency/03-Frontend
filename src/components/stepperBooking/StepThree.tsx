import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
const StepThree = () => {
    const [formData, setFormData] = useState({
        nombre: 'Juan Pérez',
        dni: '12345678',
        telefono: '987654321',
        cursoContratado: 'Curso Avanzado',
        barrio: 'Palermo',
        direccion: 'Av. Siempreviva 123',
        fechaClase: new Date(),
        horaInicio: '10:00',
        horaFin: '12:00',
        instructor: 'Instructor 1'
    });

    return (
        <Box sx={{ '& .MuiTextField-root': { m: 1 }, p: 2 }}>
            <Typography variant="h6" gutterBottom>
                <EventRepeatIcon /> Resumen de la Agenda de tu Turno
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField variant="standard" label="DNI" fullWidth value={formData.dni} InputProps={{ readOnly: true }} />
                    <TextField variant="standard" label="Teléfono" fullWidth value={formData.telefono} InputProps={{ readOnly: true }} />
                    <TextField variant="standard" label="Instructor" fullWidth value={formData.instructor} InputProps={{ readOnly: true }} />
                </Grid>
                <Grid item xs={6}>
                    <TextField variant="standard" label="Curso Contratado" fullWidth value={formData.cursoContratado} InputProps={{ readOnly: true }} />
                    <TextField variant="standard" label="Barrio" fullWidth value={formData.barrio} InputProps={{ readOnly: true }} />
                    <TextField variant="standard" label="Dirección" fullWidth value={formData.direccion} InputProps={{ readOnly: true }} />
                    <TextField
                        variant="standard"
                        label="Horario"
                        fullWidth
                        value={`${formData.horaInicio} - ${formData.horaFin}`}
                        InputProps={{ readOnly: true }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default StepThree;
