import CompraStepper from '@/components/stepperCompra';
import Dialog from '@mui/material/Dialog';

export interface Pack {
  price: number;
  caption: string;
  title: string;
  description: string;
}

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