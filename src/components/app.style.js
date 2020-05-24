import { createGlobalStyle } from 'styled-components'; 

require('prismjs/themes/prism-okaidia.css');
require('prismjs/plugins/command-line/prism-command-line.css');

const GlobalStyle = createGlobalStyle`
  ::selection {
    background: ${props => props.theme.secondaryColor};
    color: #ffffff;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  body,html {
    margin: 0px;
  }

  body {
    font-size: 16px;
    line-height: 28px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.textColor};
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  p {
    margin: 0 0 15px 0;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.primaryColor};

    &:hover {
      filter: brightness(150%);
    }
  }

  pre, code {
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    border-radius: 3px;
    padding: 10px;
  }

  code {
    padding: 3px;
  }
`

export default GlobalStyle;
