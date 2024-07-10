import { IconButton, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
export const Footer = () => {
  return (
    <Stack
      component={'footer'}
      direction={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      alignSelf={'stretch'}
      sx={{ backgroundColor: (theme) => theme.palette.primary.main, p: [4, 2] }}
    >
      <Typography variant='h5' color={'Background'}>
        Андрей Рауткин 2024
      </Typography>
      <IconButton size='large' href='https://github.com/Slumrag' color='inherit'>
        <GitHubIcon></GitHubIcon>
      </IconButton>
    </Stack>
  );
};
