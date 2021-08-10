import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #14274E;
    color: white;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
`;
