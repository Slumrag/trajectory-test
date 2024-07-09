import React, { useContext, useEffect, useState } from 'react';
import { CarContext } from '../../store/store';
import { IconButton, MenuItem, Stack, TextField } from '@mui/material';
import { CarData } from '../../store/types/CarData';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
interface CarSorterProps {}
const sortOptions = [
  {
    label: 'цене',
    value: 'price',
  },
  { label: 'году выпуска', value: 'year' },
];
type SortDirections = 'ascending' | 'descending';

export const CarSorter = ({ props }: CarSorterProps) => {
  const { cars, setCars } = useContext(CarContext);
  const [sortDirection, setSortDirection] = useState<SortDirections>('ascending');
  const [sortKey, setSortKey] = useState<keyof CarData | undefined>();

  const sortCars = (key: keyof CarData, option: SortDirections) => {
    const sortedCars = [...cars].sort((a, b) =>
      option === 'ascending' ? +a[key] - +b[key] : +b[key] - +a[key]
    );
    setCars(sortedCars);
  };

  useEffect(() => {
    sortKey && sortCars(sortKey, sortDirection);
  }, [sortKey, sortDirection]);

  return (
    <Stack direction={'row'} maxWidth={300}>
      <TextField
        select
        size='small'
        label={'Сортировать по'}
        fullWidth
        onChange={(e) => {
          setSortKey(e.target.value as keyof CarData);
        }}
        defaultValue={0}
      >
        {/* <MenuItem value={0}></MenuItem> */}
        {sortOptions.map((e) => (
          <MenuItem key={e.value} value={e.value}>
            {e.label}
          </MenuItem>
        ))}
      </TextField>
      <IconButton
        onClick={() => {
          setSortDirection(sortDirection === 'ascending' ? 'descending' : 'ascending');
        }}
      >
        {sortDirection === 'ascending' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
      </IconButton>
    </Stack>
  );
};
