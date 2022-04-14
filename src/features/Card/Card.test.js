import React from "react";
import { mount} from "enzyme";
import { Card } from "./Card";
import {  ThemeProvider } from "@emotion/react";
import { theme } from "../../theme";

describe("Card component", () => {
  // render Card before each test
  let reactWrapper;
  beforeEach(() => {
    reactWrapper = mount(<ThemeProvider theme={theme}><Card name="riddleSquare" /></ThemeProvider>);
  });

  it("has a title", () => {
    const title = reactWrapper.find("h2");
    console.log(reactWrapper.debug())
    expect(title.length).toBe(1);
    expect(title.text()).toBe("The square riddle");
  });

  it("has a number", () => {
    const number = reactWrapper.find(".p-card-number");
    expect(number.length).toBe(1);
    expect(number.text()).toBe("N°9");
  });

  it("has an image in the content", () => {
    const header = reactWrapper.find(".p-card-content");
    expect(header.length).toBe(1);
    expect(header.childAt(1).html()).toBe(
      '<img alt="Card" src="square-riddle.jpg">'
    );
  });


  it("contains text", () => {
    const content = reactWrapper.find(".p-card-content");
    expect(content.childAt(0).length).toBe(1);
    expect(content.text()).toBe("How many squares do you see in that picture?");
  });

  it("display empty <div> if the name is not defined in constants ", () => {
    const wrapper = mount(<Card name="test2" />);
    expect(wrapper.find("div").children().length).toBe(0);
  });
});
