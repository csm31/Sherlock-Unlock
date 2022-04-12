import React from "react";
import { mount } from "enzyme";
import { Card } from "./Card";

describe("Card component", () => {
  // render Card before each test
  let reactWrapper;
  beforeEach(() => {
    reactWrapper = mount(<Card type="riddleSquare" />);
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

  it("has an image in the content", () => {
    const header = reactWrapper.find(".p-card-content");
    expect(header.length).toBe(1);
    expect(header.childAt(1).html()).toBe(
      '<img alt="Card" src="square-riddle.jpg">'
    );
  });

  it("display a placeholder if the image'src doesn't exist", () => {
    const wrapper = mount(<Card type="test" />);
    const image = wrapper.find(".p-card-content").childAt(1);
    expect(image.length).toBe(1);
    expect(image.html()).toBe(
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
    const wrapper = mount(<Card type="test2" />);
    expect(wrapper.find("div").children().length).toBe(0);
  });
});
