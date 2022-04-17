import App from "./App";
import { mount } from "enzyme";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../theme";
import { BrowserRouter } from "react-router-dom";

describe("App component", () => {
  // render Card before each test
  let reactWrapper;
  beforeEach(() => {
    reactWrapper = mount(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
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

  it("has the component Introduction", () => {
    expect(reactWrapper.find("Introduction").length).toBe(1);
  });
});
