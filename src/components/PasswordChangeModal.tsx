// PasswordChangeModal.tsx
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, FormControl } from '@mui/material';
import CustomField from './CustomField';
import { Form } from 'react-final-form';
import { validateForm } from '@/form/validation';
import { ResetPassword, resetPasswordSchema } from '@/rules';
import FormFeedback from '@/form/FormFeedback';
import { changePassword } from '@/services/api';
import { FORM_ERROR } from 'final-form';

interface PasswordChangeModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (newPassword: string) => void;
}

const PasswordChangeModal: React.FC<PasswordChangeModalProps> = ({ open, onClose, onSave }) => {

  const handleSave = async (values: ResetPassword) => {
    const changePasswordResult = await changePassword(values);
    if (!changePasswordResult.success) {
      return {
        [FORM_ERROR]: changePasswordResult.message
      }
    }      

    onSave(values.password);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{
        backgroundColor: "primary.dark",
        color: "#FFF",
        textTransform: "none",
        textAlign: "center",
        mb: "40px"
      }}>Cambio de Contraseña</DialogTitle>
      <DialogContent>
        <Form
          onSubmit={handleSave}
          subscription={{ submitting: true, submitError: true }}
          validate={(values) => validateForm(values, resetPasswordSchema)}
        >
          {({ handleSubmit: handleSave, submitting, submitError }) => (
            <>
              <CustomField
                name="currentPassword"
                label="Contraseña Actual"
                type="password"
                fullWidth
              />

              <CustomField
                name="password"
                label="Nueva Contraseña"
                type="password"
                fullWidth
              />

              <CustomField
                name="passwordConfirm"
                label="Confirmar Nueva Contraseña"
                type="password"
                fullWidth
              />

              {submitError &&
                (<FormFeedback error sx={{ mt: 2, background: "none", p: 0, color: "#8D0000" }}>
                  {submitError}
                </FormFeedback>)
              }
              <DialogActions sx={{ flex: 1, justifyContent: "space-around", mt: "20px" }}>
                <Button onClick={onClose} sx={{
                  backgroundColor: "primary.dark",
                  color: "#BBB",
                  textTransform: "none",
                  p: "8px 30px"
                }}>Cancelar</Button>
                <Button disabled={submitting} onClick={handleSave} color="primary" sx={{
                  backgroundColor: "secondary.main",
                  textTransform: "none",
                  p: "8px 30px"
                }}>{submitting ? "En Progreso…" : "Guardar Cambios"}</Button>
              </DialogActions>
            </>
          )}
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordChangeModal;