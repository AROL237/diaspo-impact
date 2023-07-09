import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#E6AD7F',
        },
        secondary: {
            main: '#E6E6E6',
        },
        error: {
            main: red.A400,
        },
        info: {
            main: '#96D9D9',
        },
        thirdColor: {
            main: "#455757",
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
        body1: {

            color: '#1E1E1E', letterSpacing: 0.5,
            fontSize: 18
        },
        body2: {
            color: '#1E1E1E',
            fontSize: 16
        },
        subtitle1: {
            color: '#4E3B3B',
            fontSize: 18,
        },
        subtitle2: {
            color: '#757575'
        }
    },

});

export default theme;