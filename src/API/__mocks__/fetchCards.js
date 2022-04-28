const fetchCards = jest.fn(() => {
  return Promise.resolve({
    status: "",
    data: {},
  });
});

export default fetchCards;
