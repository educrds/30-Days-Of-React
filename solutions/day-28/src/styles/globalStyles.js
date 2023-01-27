import { css, createGlobalStyle } from 'styled-components';

const square = css`
  border-radius: 0.5rem;
  padding: 1.5vh 1vw;
  background: #f8f9fa;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const iconHover = css`
  cursor: pointer;
  transform: translateY(-4px);
  transition: transform 0.4s ease-in-out;
`;

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

export { square, GlobalStyle, iconHover };
