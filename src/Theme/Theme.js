import { createTheme } from '@material-ui/core';
import { red,  } from '@material-ui/core/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: red[400]
        },
        secondary: {
            main: '#ff8c8c'
        }
    }
})

export default theme;