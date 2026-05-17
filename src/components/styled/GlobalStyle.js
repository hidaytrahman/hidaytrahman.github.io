import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    margin: 0;
    color: #e8efff;
    font-family: 'Inter', system-ui, sans-serif;
    background: #020314;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background: radial-gradient(circle at 12% 18%, rgba(94, 131, 255, 0.22), transparent 18%),
      radial-gradient(circle at 84% 12%, rgba(183, 112, 255, 0.16), transparent 18%),
      radial-gradient(circle at 50% 82%, rgba(66, 255, 235, 0.12), transparent 18%);
    pointer-events: none;
    z-index: -1;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  ::selection {
    background: rgba(92, 129, 255, 0.4);
    color: #ffffff;
  }
`;

export default GlobalStyle;
