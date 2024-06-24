import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };
const GlobalStyles = styled.createGlobalStyle`
  :root {
    & {
      --main-background-color: #f9fafb;
      --color-brand-1: #353535;

      --color-text-1: #000;
      --color-text-2: #fff;
      --color-text-3: #353535;

      --color-yellow-100: #fef9c3;
      --color-yellow-200: #fef08a;
      --color-yellow-300: #fde047;
      --color-yellow-400: #facc15;
      --color-yellow-500: #eab308;
      --color-yellow-600: #ca8a04;
      --color-yellow-700: #a16207;
      --color-yellow-800: #854d0e;
      --color-yellow-900: #713f12;

      --color-sky-100: #e0f2fe;
      --color-sky-200: #bae6fd;
      --color-sky-300: #7dd3fc;
      --color-sky-400: #38bdf8;
      --color-sky-500: #0ea5e9;
      --color-sky-600: #0284c7;
      --color-sky-700: #0369a1;
      --color-sky-800: #075985;
      --color-sky-900: #0c4a6e;

      --color-red-700: #b91c1c;
      --color-red-800: #991b1b;
    }

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;
  }

  html {
    font-size: 62.5%;
  }
  @media (max-width: 480px) {
    html {
      font-size: 50%; /* 1rem = 8px */
    }
  }

  /* Stylowanie dla średnich ekranów (tablety) */
  @media (min-width: 481px) and (max-width: 768px) {
    html {
      font-size: 56.25%; /* 1rem = 9px */
    }
  }

  /* Stylowanie dla dużych ekranów (małe laptopy) */
  @media (min-width: 769px) and (max-width: 1024px) {
    html {
      font-size: 62.5%; /* 1rem = 10px */
    }
  }

  /* Stylowanie dla bardzo dużych ekranów (duże laptopy i monitory) */
  @media (min-width: 1025px) {
    html {
      font-size: 68.75%; /* 1rem = 11px */
    }
  }

  body {
    font-family: "Roboto", sans-serif;

    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline-offset: -1px;
  }

  button:has(svg) {
    line-height: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
