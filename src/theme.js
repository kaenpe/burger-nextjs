import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#20272F',
    },
    secondary: {
      main: '#a34',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#eee',
    },
  },
});

export default theme;
