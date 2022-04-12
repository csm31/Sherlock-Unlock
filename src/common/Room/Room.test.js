import { Room } from "./Room";
import { mount } from "enzyme";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../theme";

describe("Device component", () => {
  // mock a function
  const handleBadgeClickMock = jest.fn();
  // define props to apply to the component
  const props = {
    handleBadgeClick: () => handleBadgeClickMock(),
  };
  // render Card before each test
  let reactWrapper;
  beforeEach(() => {
    reactWrapper = mount(
      <ThemeProvider theme={theme}>
        <Room {...props} />
      </ThemeProvider>
    );
  });

  it("has an image", () => {
    const img = reactWrapper.find("img");
    expect(img.length).toBe(1);
    const { src, alt } = reactWrapper.find("img").props();
    expect(src).toBe("room.jpg");
    expect(alt).toBe("Sherlock Holmes office");
  });

  it('Should call "handleBadgeClick" when we click on the badge N°5.', () => {
    reactWrapper.find("button.door").at(0).simulate("click");
    expect(handleBadgeClickMock).toHaveBeenCalled();
  });
});
