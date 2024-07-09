import React, { useContext, useState } from 'react';
import { CarData } from '../../store/types/CarData';
import { Box, Card, CardContent, IconButton, Stack, Typography } from '@mui/material';
import { ColorDisplay } from './ColorDisplay';
import { Delete, Edit } from '@mui/icons-material';
import { CarContext } from '../../store/store';
import { DeleteCarDialog } from './DeleteCarDialog';
import { EditCardDialog } from './EditCardDialog';

export interface CarCardProps {
  car: CarData;
}

export const CarCard = ({ car }: CarCardProps) => {
  const { cars, setCars } = useContext(CarContext);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  function deleteCar(): void {
    const carIndex = cars.findIndex((e) => e.id === car.id);
    const updatedCars = [...cars];
    updatedCars.splice(carIndex, 1);
    setCars(updatedCars);
  }

  function editCar(updatedValues: Partial<CarData>): void {
    const carIndex = cars.findIndex((e) => e.id === car.id);
    const newCar = { ...cars[carIndex], ...updatedValues };
    const updatedCars = [...cars];
    updatedCars.splice(carIndex, 1, newCar);
    setCars(updatedCars);
  }

  return (
    <>
      <DeleteCarDialog
        car={car}
        isOpen={openDelete}
        handleClose={() => setOpenDelete(false)}
        handleDelete={deleteCar}
      ></DeleteCarDialog>
      <EditCardDialog
        car={car}
        isOpen={openEdit}
        handleClose={() => setOpenEdit(false)}
        handleEdit={editCar}
      ></EditCardDialog>

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
                    setOpenEdit(true);
                  }}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  title='удалить'
                  onClick={() => {
                    setOpenDelete(true);
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
