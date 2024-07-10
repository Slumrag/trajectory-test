import { Stack, Typography } from '@mui/material';

interface ColorDisplayProps {
  color: string;
}

export const ColorDisplay = ({ color }: ColorDisplayProps) => {
  return (
    <Stack direction={'row'} alignItems={'center'} gap={1}>
      <Typography>Цвет: </Typography>
      <div
        style={{ background: color, height: 15, width: 15, border: '1px solid black' }}
        title={color}
      ></div>
    </Stack>
  );
};
