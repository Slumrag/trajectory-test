import React, { useContext, useEffect, useState } from 'react';
import { CarContext } from '../../store/CarContext';
import { CarCard } from '../CarCard/CarCard';
import { Grid, Stack } from '@mui/material';
import { CarSorter } from './CarSorter';
import { SorterContext, SorterData } from '../../store/SorterContext';

export const CarList = () => {
  const [sorter, setSorter] = useState<SorterData>({ option: 'ascending' });
  const { cars, setCars } = useContext(CarContext);

  const sortCars = ({ key, option }: SorterData) => {
    if (!key) return;
    const sortedCars = [...cars].sort((a, b) =>
      option === 'ascending' ? +a[key] - +b[key] : +b[key] - +a[key]
    );
    setCars(sortedCars);
  };

  useEffect(() => {
    sortCars(sorter);
  }, [sorter]);

  return (
    <Stack gap={4}>
      <SorterContext.Provider value={{ sorter, setSorter }}>
        <CarSorter></CarSorter>
        <Grid container spacing={2}>
          {cars.map((e) => (
            <Grid item key={e.id} xs={12}>
              <CarCard car={e}></CarCard>
            </Grid>
          ))}
        </Grid>
      </SorterContext.Provider>
    </Stack>
  );
};
