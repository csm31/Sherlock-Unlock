import { Inventory } from "./Inventory";
import { mount } from "enzyme";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../theme";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import { Provider } from "react-redux";

describe("Inventory component", () => {
  // render Card before each test
  let reactWrapper;
  beforeEach(() => {
    reactWrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Inventory />{" "}
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  });

  it("has a title", () => {
    expect(reactWrapper.find("h2").length).toBe(1);
  });

});
