import { CarData } from '../../store/types/CarData';
import { Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';

interface DeleteCarDialogProps {
  isOpen: boolean;
  car: CarData;
  handleClose: () => void;
  handleDelete: () => void;
}

export const DeleteCarDialog = ({
  isOpen,
  car,
  handleClose,
  handleDelete,
}: DeleteCarDialogProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <Typography>
          Вы действительно хотите удалить{' '}
          <Typography
            component={'span'}
            fontWeight={'bold'}
          >{`${car.name} ${car.model}`}</Typography>
          ?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Отменить
        </Button>
        <Button
          color='error'
          onClick={() => {
            handleDelete();
            handleClose();
          }}
        >
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
