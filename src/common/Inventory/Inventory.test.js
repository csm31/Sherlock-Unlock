import { Inventory } from "./Inventory";
import { mount } from "enzyme";
import React from "react";

describe("Inventory component", () => {
  // render Card before each test
  let reactWrapper;
  beforeEach(() => {
    reactWrapper = mount(<Inventory />);
  });

  it("has a title", () => {
    expect(reactWrapper.find("h2").length).toBe(1);
  });

  it("has a button", () => {
    expect(reactWrapper.find("button").length).toBe(1);
  });
});
