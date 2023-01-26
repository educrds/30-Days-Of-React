import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Varela Round', sans-serif;
}

body {
  max-width: 655px;
  margin: auto;
  color: #242a2d;
  background-color: #e9ecef;
  padding: 5vh 0;
}
`;
 
export default GlobalStyle;