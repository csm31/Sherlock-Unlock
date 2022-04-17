import { Introduction } from "./Introduction";
import { mount } from "enzyme";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../theme";
import { BrowserRouter } from "react-router-dom";
import { useLocation } from 'react-router-dom';

describe("Introduction component", () => {
  // render Card before each test
  let reactWrapper;
  beforeEach(() => {
    reactWrapper = mount(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Introduction />
        </BrowserRouter>
      </ThemeProvider>
    );
  });

  it("has an image", () => {
    const img = reactWrapper.find("img");
    expect(img.length).toBe(1);
  });

  it("has 3 paragraphs of text", () => {
    const p = reactWrapper.find("p");
    expect(p.length).toBe(3);
  });

});
