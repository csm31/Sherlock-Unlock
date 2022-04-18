import { Inventory } from "./Inventory";
import { Room} from "../Room/Room";
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
          <Room/>
            <Inventory />{" "}
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  });

  it("has a title", () => {
    expect(reactWrapper.find("h2").length).toBe(1);
  });

  it("has a <p> when inventory empty", () => {
    expect(reactWrapper.find("p").length).toBe(1);
    expect(reactWrapper.find("p").text()).toBe(
      "Your inventory is empty so far."
    );
  });

});
