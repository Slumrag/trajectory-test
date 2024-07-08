import React, { useContext } from 'react';
import { CarContext } from '../../store/store';
import { CarCard } from '../CarCard/CarCard';
import { Grid } from '@mui/material';

export const CarList = () => {
  const cars = useContext(CarContext);
  return (
    <Grid container spacing={2} maxWidth={800}>
      {cars.map((e) => (
        <Grid item key={e.id} xs={12}>
          <CarCard car={e}></CarCard>
        </Grid>
      ))}
    </Grid>
  );
};
