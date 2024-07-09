import React, { useContext } from 'react';
import { CarContext } from '../../store/store';
import { CarCard } from '../CarCard/CarCard';
import { Grid, Stack } from '@mui/material';
import { CarSorter } from './CarSorter';

export const CarList = () => {
  const { cars } = useContext(CarContext);
  return (
    <Stack gap={4}>
      <CarSorter></CarSorter>
      <Grid container spacing={2}>
        {cars.map((e) => (
          <Grid item key={e.id} xs={12}>
            <CarCard car={e}></CarCard>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
