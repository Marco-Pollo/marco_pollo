import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
          default: '#121212'
        },
        primary: {
            light: '#ed4b82',
            main: '#e91e63',
            dark: '#a31545',
            contrastText: '#ffffff'
        },
        secondary: {
            light: '#595959',
            main: '#303030',
            dark: '#212121',
            contrastText: '#ffffff'
        }
    }
});

export default theme;
