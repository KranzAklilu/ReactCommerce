import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { ProductsPropertyProvider } from "./context/ProductsProperty";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#c8a165",
      contrastText: "#fff",
    },
    secondary: {
      main: "#c87065",
      contrastText: "#fff",
    },
    background: {
      default: "#f6f6f6",
    },
    text: {
      primary: "#2e2e2e",
    },
  },
  breakpoints: {
    values: {
      xs: 400,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <ProductsPropertyProvider>
          <App />
        </ProductsPropertyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
