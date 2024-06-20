import React, { useState } from 'react';
import { TextField, Button, Box, MenuItem, Typography, Avatar, IconButton, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CustomField from './CustomField';
import { Form } from 'react-final-form';
import { validateForm } from '@/form/validation';
import { profileSchema } from '@/rules';
import FormFeedback from '@/form/FormFeedback';

const ModificarDatosForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: 'Cleribeth',
    lastName: 'Mora',
    telefono: '1123902037',
    email: 'Ana@gmail.com',
    ciudad: 'Capital Federal',
    localidad: 'Palermo',
    direccion: 'Pacheco 2028',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = (values: any) => {
    // Add save logic here
    console.log('Saved', values);
  };

  const handlePasswordUpdate = () => {
    // Add password update logic here
    console.log('Password Update');
  };

  return (
    <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: 2, maxWidth: 600, mx: 'auto' }}>
      <Typography 
        variant="h5" 
        align="center" 
        mb={2} 
        sx={{ 
          background: "#001D3D", 
          color: "#FFF", 
          fontSize:"14px", 
          p: "5px" 
        }}>
        Editar Perfil
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Avatar sx={{ width: 56, height: 56, mr: 2 }}>A</Avatar>
        <IconButton aria-label="edit profile picture">
          <EditIcon />
        </IconButton>
      </Box>
      <Form
        onSubmit={handleSave}
        subscription={{ submitting: true, submitError: true }}
        validate={(values) => validateForm(values, profileSchema)}
        initialValues={formData}
      >
        {({ handleSubmit: handleSave, submitting, submitError }) => (
          <>
            <Grid container spacing={2} sx={{ mb: "26px" }}>
              <Grid item xs={12} sm={6}>
                <CustomField name="firstName" label="Nombre" fullWidth underline readOnly />
                <CustomField name="telefono" label="Telefono" onChange={handleChange} fullWidth underline />
                <CustomField name="email" type='email' label="Email" onChange={handleChange} fullWidth underline />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomField name="lastName" label="Apellido" fullWidth underline readOnly />
                <CustomField name="ciudad" label="Ciudad" onChange={handleChange} fullWidth underline />
                <CustomField name="direccion" label="Dirección" onChange={handleChange} fullWidth underline />
              </Grid>
            </Grid>
            {submitError &&
              (<FormFeedback error sx={{ mt: 2, background: "none", p: 0, color: "#8D0000" }}>
                {submitError}
              </FormFeedback>)
            }
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Guardar cambios
              </Button>
              <Button variant="contained" color="secondary" onClick={handlePasswordUpdate}>
                Actualizar contraseña
              </Button>
            </Box>
          </>
        )}
      </Form>
    </Box>
  );
};

export default ModificarDatosForm;
