import CompraStepper from '@/components/stepperCompra';
import Dialog from '@mui/material/Dialog';

interface DialogPaymentProps {
    open: boolean;
    handleClose: () => void;
    fullScreen: boolean;
}

const DialogPayment = ({open, handleClose, fullScreen}: DialogPaymentProps) => {
  return (
    <Dialog
    fullScreen={fullScreen}
    maxWidth={"xl"}
    open={open}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
  >
     <CompraStepper/>
  </Dialog>
  )
}

export default DialogPayment