import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    h5: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
  },
});
