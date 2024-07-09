import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { CarData } from '../../store/types/CarData';

interface EditCardDialogProps {
  car: CarData;
  isOpen: boolean;
  handleClose: () => void;
  handleEdit: (car: Partial<CarData>) => void;
}

export const EditCardDialog = ({ car, isOpen, handleClose, handleEdit }: EditCardDialogProps) => {
  const [name, setName] = useState(car.name);
  const [model, setModel] = useState(car.model);
  const [price, setPrice] = useState(car.price);
  const resetForm = () => {
    setName(car.name);
    setModel(car.model);
    setPrice(car.price);
  };
  return (
    <Dialog open={isOpen}>
      <DialogTitle>Редактировать автомобиль</DialogTitle>
      <DialogContent>
        <form action='' autoComplete='off'>
          <Stack gap={2} pt={1}>
            <TextField
              id='name'
              label='Марка'
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            ></TextField>
            <TextField
              id='model'
              label='Модель'
              value={model}
              onChange={(e) => setModel(e.currentTarget.value)}
            ></TextField>
            <TextField
              id='price'
              label='Цена'
              type='numeric'
              value={price}
              onChange={(e) => {
                if (!isNaN(+e.currentTarget.value)) {
                  setPrice(+e.currentTarget.value);
                }
              }}
            ></TextField>
          </Stack>
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          color='inherit'
          autoFocus
          onClick={() => {
            handleClose();
            resetForm();
          }}
        >
          Отменить
        </Button>
        <Button
          onClick={() => {
            handleEdit({ name, model, price });
            handleClose();
          }}
        >
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
