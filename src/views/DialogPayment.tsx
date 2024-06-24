import CompraStepper from '@/components/stepperCompra';
import { Pack } from '@/services/api';
import Dialog from '@mui/material/Dialog';

interface DialogPaymentProps {
  open: boolean;
  handleClose: () => void;
  selectedPack: Pack | null;
  fullScreen: boolean;
}

const DialogPayment = ({open, handleClose, selectedPack, fullScreen}: DialogPaymentProps) => {
  return (
    <Dialog
    fullScreen={fullScreen}
    maxWidth={"xl"}
    open={open}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
  >
     <CompraStepper selectedPack={selectedPack}/>
  </Dialog>
  )
}

export default DialogPayment