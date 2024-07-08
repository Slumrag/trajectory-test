import React, { useContext, useState } from 'react';
import { CarData } from '../../store/types/CarData';
import { Box, Card, CardContent, IconButton, Stack, Typography } from '@mui/material';
import { ColorDisplay } from './ColorDisplay';
import { Delete, Edit, EditOff } from '@mui/icons-material';
import { CarContext } from '../../store/store';
import { DeleteCarDialog } from './DeleteCarDialog';

export interface CarCardProps {
  car: CarData;
}

export const CarCard = ({ car }: CarCardProps) => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const { cars, setCars } = useContext(CarContext);
  const [open, setOpen] = useState(false);

  function deleteCar(id: number): void {
    const carIndex = cars.findIndex((e) => e.id === id);
    const updatedCars = [...cars];
    updatedCars.splice(carIndex, 1);
    setCars && setCars(updatedCars);
  }

  return (
    <>
      <DeleteCarDialog
        isOpen={open}
        car={car}
        handleClose={() => setOpen(false)}
        handleAccept={() => deleteCar(car.id)}
      ></DeleteCarDialog>
      <Card>
        <CardContent sx={{ p: 3 }}>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box>
              <Typography variant='h4' mb={2}>{`${car.name} ${car.model}`}</Typography>
              <Typography variant='h6'>{`${car.year} г.`}</Typography>
              <ColorDisplay color={car.color} />
            </Box>
            <Stack justifyContent={'space-between'}>
              <Stack direction={'row'} gap={1}>
                <IconButton
                  title='редактировать'
                  onClick={() => {
                    setIsInEditMode(!isInEditMode);
                  }}
                >
                  {isInEditMode ? <EditOff /> : <Edit />}
                </IconButton>
                <IconButton
                  title='удалить'
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <Delete />
                </IconButton>
              </Stack>
              <Typography variant='h5'>{`${car.price} $`}</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
