import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  // shadows: ["none"],
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#B60033',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
