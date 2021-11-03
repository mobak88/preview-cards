// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Red Hat Display', sans-serif;
  }
  p {
      font-size: 16px;
  }
`;

export default GlobalStyle;
