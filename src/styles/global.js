import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  html, body, #root{
    height: 100%;
  }

  button{
    background-color: none;
    border: none;
  }

  a{
    text-decoration: none;
    outline: none
  }
`;

export default GlobalStyle;
