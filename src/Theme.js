import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    brightOrange: 'hsl(31, 77%, 52%)',
    darkCyan: 'hsl(184, 100%, 22%)',
    veryDarkCyan: 'hsl(179, 100%, 13%)',
    transparentWhite: 'hsla(0, 0%, 100%, 0.75)',
    veryLightGray: 'hsl(0, 0%, 95%)',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
