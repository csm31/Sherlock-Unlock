# Project Name

Sherlock Unlock is an escape game. The goal is to solve puzzles to escape from a room.

## Table of Contents

- [Start the app](#start-app)
- [Test the app](#start-app)
- [Main Technologies Used](#main-technologies-used)
- [Temporary Technical choices](#technical-choices)
- [Development Rules](#development-rules)
- [Roadmap](#roadmap)
- [Contact](#contact)

## Start the app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- Run `npm install` to install the libraries
- Run `npm run dev` to run the app in development mode with JSON Server.\
- Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Test the app

- run `npm test`
  It launches the test runner in the interactive watch mode.\

## Main Technologies Used

- React - version 17.0.2
- Redux - version 4.1.2
- Emotion - version 11.9.0 : library for writing css styles with JavaScript (css-in-js). I used the package @emotion/react that is recommended for React. I also used @emotion/styled to create components that have styles attached to them
- PrimeReact UI framework
- React Router library to navigate to pages
- Jest for testing

## Temporary Technical choices

I put myself in the shoes of a front-end developer. Since I didn't have an API at my disposal, I chose to mock it with the json-server library. This choice prevented me to deploy the application with Netlify. In real life, when the API would have been ready, I would have made the switch.

For testing, in addition to Jest, I used Enzyme. In real life, it shouldn't be the choice for a long-term project since there will be no Enzyme adapter for React v18. I had to stay at the v17 for this technical test. The recommended choice to replace Enzyme is the React Testing Library.

## Development Rules

Follow a lightweight version of GitFlow:

- Create feature branches and develop there
- Do regular commits
- When a feature is finished and tested, merge in develop
- The main branch will be used to deploy to production -> to publish it to the web

## Roadmap

- Replace json-server with a real API
- Once the real API is used, deploy the application with Netlify
- Internationalisation with i18next
- Improve test coverage

## Contact

Created by [Capucine Soum](mailto:soum.capucine@gmail.com) - feel free to contact me!
