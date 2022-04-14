export const cards = {
  riddleSquare: {
    title: "The square riddle",
    cardType: "riddle",
    number: 4,
    content:
      "A paper with the riddle: how many squares do you see in that picture?",
    image: "square-riddle.jpg",
  },
  chest: {
    title: "An old chest",
    cardType: "object",
    number: 2,
    content: "The old chest is closed. What secrets could it be hidden?",
    image: "chest.png",
  },
  key: {
    title: "A rusty key",
    cardType: "key",
    number: 9,
    content: "The rusty key must open something in the room...",
    image: "key.jpg",
  },
  // paper: {
  //   title: "A piece of paper",
  //   cardType: "key",
  //   number: 1,
  //   content: "The paper contains the code 9245",
  //   image: "mystery.png",
  // },
  exitDoor: {
    title: "A locked door",
    cardType: "exit",
    number: 5,
    content: "The door is locked with a code. I must find it to escape.",
    image: "door-code.png",
  },

  test: {
    title: "Test",
    cardType: "exit",
    number: 12,
    content: "Test",
    image: "test.png",
  },
};

export const baseURL="http://localhost:3001"
export const endPoint="/cards"
