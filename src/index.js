import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
