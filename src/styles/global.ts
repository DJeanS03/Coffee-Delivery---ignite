import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background:  ${({ theme }) => theme.colors["base-background"]};
    color:  ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  input {
    outline: none;
  }

  .icons, button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  button, input {
    border: none;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    appearance: textfield;
  }

  @media (max-width: 768px) {
    html  {
      height: 100vh;
      font-size: 70%;
      margin: auto 10px;
    }
/* 
    form {
      width: 90%;
    }

    span {
      font-size: 5rem;
      line-height: 5rem;
   } */
  }

`;
