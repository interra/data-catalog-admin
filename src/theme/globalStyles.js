import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import defaultTheme from './default'


const GlobalStyles = createGlobalStyle`
  @import url('http://fonts.googleapis.com/css?family=Rubik:300,500,700&amp;subset=latin');
  @import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

  body {
    background-color: ${defaultTheme.backgroundColor};
    color: ${defaultTheme.textColor};

    a, input, button, textarea {
      transition: all 0.2s linear;
    }
    a {
      color: ${defaultTheme.linkColor};
      &:hover {
        color: ${defaultTheme.linkHoverColor};
      }
    }

    table {
      background-color: white;
    }
    .table-bordered td,
    .table-bordered th {
      border-color: ${defaultTheme.borderColor};
    }
    .form-control {
      font-size: 1.6rem;
      margin-bottom: 15px;
    }
    .theme-wrapper {
      border-bottom: 1px solid #dddddd;
      padding: 5px 0;
      margin-bottom: 10px;
      display: flex;
      .theme {
        color: #A7AAAC;
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        text-transform: uppercase;
      }
    }

  }
`;
export default GlobalStyles;
