import { Device } from "./Device";
import { mount } from "enzyme";
import React from "react";

describe("Device component", () => {
  // render Card before each test
  let reactWrapper;
  beforeEach(() => {
    reactWrapper = mount(<Device />);
  });

  it("has 2  inputs (2-digit code)", () => {
    expect(reactWrapper.find("input").length).toBe(2);
  });
  
  it("has a button", () => {
    expect(reactWrapper.find("button").length).toBe(1);
  });

});
