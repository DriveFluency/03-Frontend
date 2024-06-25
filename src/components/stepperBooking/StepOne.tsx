import { localidades } from '@/lib/localidadesCapital';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { BookingStepProps } from '.';

const StepOne = ({ formData: formDataStepOne, setFormData: setFormDataStepOne }: BookingStepProps) => {
    const [formData, setFormData] = useState(localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile') as string) : {
        firstName: '',
        dni: '',
        telefono: '',
        cursoContratado: '',
        barrio: '',
        direccion: ''
    });

    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        setFormDataStepOne({ ...formDataStepOne,...formData, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        setFormDataStepOne(formData);
    }, []);

    return (
        <Box sx={{ width: '80%' }}>
            <Typography variant="h6" gutterBottom>
                <PersonIcon /> Datos Personales
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', gap: 2 }}>
                    <Avatar sx={{ width: 56, height: 56, mb: 2 }} src="/path/to/user/photo.jpg" />
                    <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column', width: '100%' }} >
                        <TextField variant="standard" label="Nombre" fullWidth value={formData.firstName} InputProps={{ readOnly: true }} />
                        <TextField variant="standard" label="DNI" fullWidth value={formData.dni} InputProps={{ readOnly: true }} />
                        <TextField variant="standard" name="telefono" label="Teléfono" fullWidth value={formData.telefono} onChange={handleChange} />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <TextField variant="standard" label="Curso Contratado" fullWidth value={formData.cursoContratado} InputProps={{ readOnly: false }} onChange={handleChange} name="cursoContratado" />
                </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                <LocationOnIcon />
                Dirección de la Clase de Manejo - Capital Federal
            </Typography>
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Grid item xs={6} width={"100%"}>
                    <FormControl fullWidth>
                        <InputLabel>Barrio</InputLabel>
                        <Select name="barrio" value={formData.barrio} label="Barrio" onChange={handleChange}>
                            <MenuItem value="">Elija Localidad</MenuItem>
                            {localidades.map((localidad) => (
                                <MenuItem key={localidad.label} value={localidad.label}>{localidad.label}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField variant="standard" name="direccion" label="Dirección" value={formData.direccion} onChange={handleChange} fullWidth />
                </Grid>
            </Grid>
        </Box>
    );
};

export default StepOne;