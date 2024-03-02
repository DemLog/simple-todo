import {createGlobalStyle} from 'styled-components';
import InterTtf from "@styles/fonts/Inter.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url("${InterTtf}") format('truetype');
  }
  
  html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
  }
  
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    background-color: #1A1A1A;
  }
`;