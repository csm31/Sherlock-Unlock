import  App  from "./App";
import { mount, shallow } from "enzyme";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../theme";

describe("App component", () => {
  // render Card before each test
  let reactWrapper;
  beforeEach(() => {
    reactWrapper = mount(<ThemeProvider theme={theme}><App /></ThemeProvider>);
  });

  it("has a header", () => {
    expect(reactWrapper.find("header").length).toBe(1);
  });

  it("has a title", () => {
    expect(reactWrapper.find("h1").length).toBe(1);
  });

  it("has a main element", () => {
    expect(reactWrapper.find("main").length).toBe(1);
  });

  it("has the component Room, Inventory, Introduction and Device", () => {
    expect(reactWrapper.find("Room").length).toBe(1);
    expect(reactWrapper.find("Inventory").length).toBe(1);
    expect(reactWrapper.find("Introduction").length).toBe(1);
    expect(reactWrapper.find("Device").length).toBe(1);
  });


});
