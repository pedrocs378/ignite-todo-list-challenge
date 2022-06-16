import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --background: #454545;

    --gray-700: #0D0D0D;
    --gray-600: #1A1A1A;
    --gray-500: #262626;
    --gray-400: #333333;
    --gray-300: #808080;
    --gray-200: #D9D9D9;
    --gray-100: #F2F2F2;
    --white: #FFFFFF;

    --purple: #8284FA;
    --purple-dark: #5E60CE;

    --blue: #4EA8DE;
    --blue-dark: #1E6F9F;

    --danger: #E25858;

    /* Font Weight */
    --fw-regular: 400;
    --fw-bold: 700;
    --fw-black: 900;

    /* Font Size */
    --fs-md: 1rem; /* 16px */
    --fs-sm: 0.875rem; /* 14px */
    --fs-xs: 0.75rem; /* 12px */

    /* Border Radius */
    --br-default: 0.5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 1px 2px var(--purple);
  }

  ::-moz-selection {
    color: var(--white);
    background: var(--purple);
  }
  ::selection {
    color: var(--white);
    background: var(--purple);
  }

  body {
    background-color: var(--gray-600);
    color: var(--gray-300);
    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar-track {
      border-radius: 12px;
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: var(--gray-300) 0% 0% no-repeat padding-box;

      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);

      opacity: 1;
    }
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: var(--fs-md);
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`