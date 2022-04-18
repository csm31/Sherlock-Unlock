import App from "./App";
import { mount } from "enzyme";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../theme";
import { BrowserRouter } from "react-router-dom";
import { store } from "../app/store";
import { Provider } from "react-redux";

describe("App component", () => {
  // render Card before each test
  let reactWrapper;
  beforeEach(() => {
    reactWrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  });

  it("has a header", () => {
    expect(reactWrapper.find("header").length).toBe(1);
  });

  it("has a title", () => {
    expect(reactWrapper.find("h1").length).toBe(1);
  });

  it("has a main element", () => {
    expect(reactWrapper.find("main").length).toBe(1);
  });

  it("pathname '/' by default", () => {
    expect(window.location.pathname).toBe("/");
  });

  it("pathname '/game' when click on Start game", () => {
    reactWrapper.find("a").simulate("click", { button: 0 });
    expect(window.location.pathname).toBe("/game");
  });
});
