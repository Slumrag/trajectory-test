import React, { useState } from 'react';
import { CarData } from '../../store/types/CarData';
import { Box, Card, CardContent, IconButton, Stack, Typography } from '@mui/material';
import { ColorDisplay } from './ColorDisplay';
import { Delete, Edit, EditOff } from '@mui/icons-material';

export interface CarCardProps {
  car: CarData;
}

export const CarCard = ({ car }: CarCardProps) => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  return (
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
              <IconButton title='удалить' onClick={() => console.log('delete')}>
                <Delete />
              </IconButton>
            </Stack>
            <Typography variant='h5'>{`${car.price} $`}</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
