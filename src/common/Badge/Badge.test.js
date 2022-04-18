import { ThemeProvider } from "@emotion/react";
import { theme } from "../../theme";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import { Provider } from "react-redux";
import { Badge } from "./Badge";
import { mount, shallow } from "enzyme";
import React from "react";

describe("Inventory component", () => {
  const props = { id: "5", name: "door" };
  // render Card before each test
  let reactWrapper;
  beforeEach(() => {
    reactWrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Badge {...props} />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  });

  it("is not disabled by default", () => {
    expect(reactWrapper.find("button").props().disabled).toBe(false);
  });

  it("has the class: p-button-rounded p-button-sm door", () => {
    const badge = reactWrapper.find("button");
    expect(badge.hasClass("p-button-rounded p-button-sm door")).toBe(true);
  });

  it("badge is disabled after a click", () => {
    reactWrapper.find("button").simulate("click");
    expect(reactWrapper.find("button").prop("disabled")).toBe(true);
  });

  it("keep a rounded shape even with long figures", () => {
    const props = { id: "1000", name: "door" };
    // Mock theme and add id card 1000
    const mockTheme = Object.assign({}, theme);
    mockTheme.badgePosition["1000"] = {
      top: "150px",
      left: "150px",
    };
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={mockTheme}>
          <BrowserRouter>
            <Badge {...props} />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
    const badge = reactWrapper.find("button");
    // To be rounded, height should be equal to width
    expect(badge.height).toBe(badge.width);
  });
});
