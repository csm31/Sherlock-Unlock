import React from "react";
import { mount } from "enzyme";
import { CardGame } from "./Card";

describe("Card component", () => {
  // render Card before each test
  let reactWrapper;
  beforeEach(() => {
    reactWrapper = mount(<CardGame type="riddleSquare" />);
  });

  it("has a title", () => {
    const title = reactWrapper.find(".p-card-title");
    expect(title.length).toBe(1);
    expect(title.text()).toBe("The square riddle");
  });

  it("has a subtitle that will be the card number", () => {
    const subtitle = reactWrapper.find(".p-card-subtitle");
    expect(subtitle.length).toBe(1);
    expect(subtitle.text()).toBe("N°9");
  });

  it("has an image as a header", () => {
    const header = reactWrapper.find(".p-card-header");
    expect(header.length).toBe(1);
    expect(header.childAt(0).html()).toBe(
      '<img alt="Card" src="square-riddle.jpg">'
    );
  });

  it("display a placeholder if the header'src doesn't exist", () => {
    const wrapper = mount(<CardGame type="test" />);
    const header = wrapper.find(".p-card-header");
    expect(header.length).toBe(1);
    expect(header.childAt(0).html()).toBe(
      '<img alt="Card" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png">'
    );
  });

  it("contains text", () => {
    const content = reactWrapper.find(".p-card-content");
    expect(content.length).toBe(1);
    expect(content.text()).toBe("How many squares do you see in that picture?");
  });

  it("<p> around the content ", () => {
    expect(reactWrapper.find("p").length).toBe(1);
  });

  it("display empty <div> if type is not defined in constants ", () => {
    const wrapper = mount(<CardGame type="test2" />);
    expect(wrapper.find("div").children().length).toBe(0);
  });
});
