import { css } from "@emotion/react";

export const GlobalStyles = (theme) => css`
@import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Grape+Nuts&display=swap');

// Bubblegum Sans', cursive

  * {
    font-family: 'Grape Nuts', cursive;;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // #root {
  //   display: flex;
  //   flex-direction: column;
  //   height: 100vh;
  //   background-color: ${theme.colors.white};
  //   box-shadow: ${theme.boxShadowComplete};
  // }

  // h1 {
  //   font-size: 1.5rem;
  // }

  // h2 {
  //   font-size: 1rem;
  // }

  // h3 {
  //   font-size: 1rem;
  //   font-weight: 500;
  // }

  // h1,
  // h2,
  // h3,
  // p,
  // label {
  //   color: ${theme.colors.charcoal};
  // }

  // a {
  //   text-decoration: none;
  //   color: currentColor;
  // }

  // li {
  //   list-style: none;
  // }

  // button {
  //   border: none;
  //   font-size: 1rem;
  //   cursor: pointer;
  //   background-color: transparent;
  // }

  // main {
  //   // push the footer at the bottom
  //   flex-grow: 1;
  // }

  // input {
  //   border-radius: 3px;
  // }
`;
