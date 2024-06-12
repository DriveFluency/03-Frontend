import CompraStepper from '@/components/stepperCompra';
import Dialog from '@mui/material/Dialog';

interface DialogScheduleProps {
    open: boolean;
    handleClose: () => void;
    fullScreen: boolean;
}

const DialogSchedule = ({open, handleClose, fullScreen}: DialogScheduleProps) => {
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

export default DialogSchedule