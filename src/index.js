import React from "react";
import ReactDOM from "react-dom";
import "./indexStyle.js";
import App from "./app/App";

import { store } from "./app/store";
import { Provider } from "react-redux";

// provide the global style and the theme
/** @jsxImportSource @emotion/react */
import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "./indexStyle";
import { theme } from "./theme";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
