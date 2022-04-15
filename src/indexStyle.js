import { css } from "@emotion/react";

export const GlobalStyles = (theme) => css`
  @import url("https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap");

  * {
    font-family: "Bubblegum Sans", cursive;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    margin: 2rem;
    @media screen and (max-width: 500px) {
      margin: 1rem;
    }
  }

  h1 {
    margin: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0.5rem;
  }

  p {
    margin: 0.5rem;
    font-size: 1.25rem;
  }

  a {
    text-decoration: none;
  }

  button {
    font-size: 1rem;
    cursor: pointer;
    background-color: transparent;
  }

  // main {
  //   // push the footer at the bottom
  //   flex-grow: 1;
  // }

  // input {
  //   border-radius: 3px;
  // }
`;
