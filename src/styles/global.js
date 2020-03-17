import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialised;


  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
    color: #333;
  }
  a {
    text-decoration: none;
    color: #179;
    :hover {
      text-decoration: underline;
    }
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

`;