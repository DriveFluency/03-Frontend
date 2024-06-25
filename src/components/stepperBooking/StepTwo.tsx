import CalculateIcon from '@mui/icons-material/Calculate';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { BookingStepProps } from '.';

const StepOne = ({ formData: formDataStepTwo, setFormData: setFormDataStepTwo }: BookingStepProps) => {
  const [formData, setFormData] = useState({
    date: dayjs(),
    startTime: '08:00',
    endTime: '10:00',
    instructor: '',
  });

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setFormDataStepTwo({ ...formDataStepTwo, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date: any) => {
    setFormData({ ...formData, date: date });
    setFormDataStepTwo({ ...formDataStepTwo,...formData, date: date });
  };

  useEffect(() => {
    setFormDataStepTwo({ ...formDataStepTwo, ...formData });
  }, []);

  return (
    <Box sx={{width:'80%', p:2}}>
      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        <CalculateIcon />
        Selecciona los Datos de tu Clase de Manejo
      </Typography>
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center'}}>
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',gap:2 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker defaultValue={dayjs()} value={formData.date} onChange={handleDateChange} />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6} sx={{ p:1 }}>
          <Box sx={{ display: 'flex', gap: 1, }}>
          <TextField
            variant="standard"
            name="startTime"
            label="Hora de Inicio"
            type="time"
            value={formData.startTime}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          <TextField
            variant="standard"
            name="endTime"
            label="Hora de Fin"
            type="time"
            value={formData.endTime}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          </Box>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Instructor Preferido</InputLabel>
            <Select name="instructor" value={formData.instructor} label="Instructor Preferido" onChange={handleChange}>
              <MenuItem value="">Elija Instructor</MenuItem>
              <MenuItem value="Instructor 1">Instructor 1</MenuItem>
              <MenuItem value="Instructor 2">Instructor 2</MenuItem>
              <MenuItem value="Instructor 3">Instructor 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StepOne;
