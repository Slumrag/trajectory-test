import React, { useContext } from 'react';
import { CarContext } from '../../store/CarContext';
import { IconButton, MenuItem, Stack, TextField } from '@mui/material';
import { CarData } from '../../store/types/CarData';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { SorterContext } from '../../store/SorterContext';
interface CarSorterProps {}
const sortOptions = [
  {
    label: 'цене',
    value: 'price',
  },
  {
    label: 'году выпуска',
    value: 'year',
  },
];
/*  TODO: сортировать каротчки после редактирования цены */
export const CarSorter = ({ props }: CarSorterProps) => {
  const { sorter, setSorter } = useContext(SorterContext);

  return (
    <Stack direction={'row'} maxWidth={300}>
      <TextField
        select
        size='small'
        label={'Сортировать по'}
        fullWidth
        onChange={(e) => {
          setSorter((s) => ({
            key: e.target.value as keyof CarData,
            option: s.option,
          }));
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
          setSorter((s) => ({
            key: s.key,
            option: s.option === 'ascending' ? 'descending' : 'ascending',
          }));
        }}
      >
        {sorter.option === 'ascending' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
      </IconButton>
    </Stack>
  );
};
