import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'DM Sans', sans-serif;
  padding: 0rem  15rem 0rem;

  @media screen and (max-width:1400px){
    padding: 0 10%;
  }
 
}
a {
  text-decoration: none;
  color: black;
}
* {
  box-sizing: border-box;
}

`;
