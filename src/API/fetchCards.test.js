// import the actual module
import fetchCards from "./fetchCards";

// then tell Jest to use the mocked version
jest.mock("./fetchCards.js");

test("get the cards", async () => {
  // arrange
  const expectedValue = [{ id: 1 }, { id: 2 }];

  // set the resolved value for the next call to fetchCards.
  //   Useful if you’d like to finely control what each call to your mocked function resolves to.
  const mockResponse = {
    status: "mock",
    data: expectedValue,
  };
  fetchCards.mockResolvedValueOnce(mockResponse);

  // act
  const actualCards = await fetchCards();

  // assertion
  expect(fetchCards).toHaveBeenCalledTimes(1); //mock function called once
  expect(fetchCards).toHaveReturned(); // mock function sucessfully returned

  expect(actualCards).toEqual(mockResponse); // mock function returns the complete mock response
  expect(actualCards.data).toEqual(expectedValue);
});

test("get an error", async () => {
  const myMockFunc = jest.fn(() => Promise.reject("error"));

  setTimeout(
    () =>
      myMockFunc().catch((e) => {
        console.log(e); // error
      }),
    100
  );
  await new Promise((resolve) => setTimeout(resolve, 200));

  expect(myMockFunc.mock.calls.length).toBe(1);
});
