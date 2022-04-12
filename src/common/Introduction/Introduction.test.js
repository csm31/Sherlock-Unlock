import { Introduction } from "./Introduction";
import { mount } from "enzyme";
import React from "react";

describe("Introduction component", () => {
  // render Card before each test
  let reactWrapper;
  beforeEach(() => {
    reactWrapper = mount(<Introduction />);
  });

  it("has an image", () => {
    const img=reactWrapper.find("img")
    expect(img.length).toBe(1);
  });

  it("has a3 paragraphs of text", ()=>{
    const p=reactWrapper.find("p")
    expect(p.length).toBe(3);
  })
});
