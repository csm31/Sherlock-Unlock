import { Room } from "./Room";
import { mount } from "enzyme";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../theme";
import { store } from "../../app/store";
import { Provider } from "react-redux";

describe("Room component", () => {
  // render Card before each test
  let reactWrapper;
  beforeEach(() => {
    reactWrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Room />
        </ThemeProvider>
      </Provider>
    );
  });

  it("has an image", () => {
    const img = reactWrapper.find("img");
    expect(img.length).toBe(1);
    const { src, alt } = reactWrapper.find("img").props();
    expect(src).toBe("room.jpg");
    expect(alt).toBe("Sherlock Holmes office");
  });

  it("has 3 badge number", () => {
    expect(reactWrapper.find("button.p-button-rounded").length).toBe(3);

  });
});
