import React, { useState } from 'react';
import { CarData } from '../../store/types/CarData';
import { Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';

interface DeleteCarDialogProps {
  isOpen: boolean;
  car: CarData;
  handleClose: () => void;
  handleAccept: () => void;
}

export const DeleteCarDialog = ({
  isOpen,
  car,
  handleClose,
  handleAccept,
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
            handleAccept();
            handleClose();
          }}
        >
          Удалить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
