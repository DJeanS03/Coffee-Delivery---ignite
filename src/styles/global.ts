import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  
  :root {
    --base-title: #272221;
    --base-subtitle: #403937;
    --base-text: #574f4d;
    --base-label: #8d8686;
    --base-hover: #d7d5d5;
    --base-button: #e6e5e5;
    --base-input: #ededed;
    --base-title: #f3f2f2;
    --background: #fafafa;
    --white: #fff;

    --yellow-dark: #c47f17;
    --yellow-500: #dbac2c;
    --yellow-light: #f1e9c9;

    --purple-dark: #4b2995;
    --purple-500: #8047f8;
    --purple-light: #ebe5f9;
  }

  body {
    background: var(--background);
    color: var(--base-text);
    -webkit-font-smoothing: antialiased;
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

`