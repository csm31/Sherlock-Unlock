# Project Name

Sherlock Unlock is an escape game. The goal is to solve puzzles to escape from a room.

<!-- TODO > Live demo [_here_](https://www.example.com).
-->

## Table of Contents

- [General Information](#general-information)
- [Start the app](#start-app)
- [Technical choices](#technical-choices)
- [Technologies Used](#technologies-used)
- [Other available scripts](#available-scripts)
- [Development Rules](#development-rules)
- [Project Status](#project-status)
- [Roadmap](#roadmap)
- [Contact](#contact)

## General Information

## Start the app

- Run `npm install` to install the libraries
- Run `npm run dev` to run the app in development mode with JSON Server.\
- Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Technical choices

A mock API was used with the json-server library

## Technologies Used

- React - version 17.0.2
- Redux - version 4.1.2
- Emotion - version 11.9.0 : library for writing css styles with JavaScript (css-in-js). I used the package @emotion/react that is recommended for React. I also used @emotion/styled to create components that have styles attached to them

## Other available scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In the project directory, you can run:

### `npm test`

<!-- TODO to configure and to create test file -->

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Development Rules

Follow a lightweight version of GitFlow:

- Create feature branches and develop there
- Do regular commits
- When a feature is finished and tested, merge in develop
- The main branch will be used to deploy to production -> to publish it to the web

## Project Status

Project is: _in progress_

## Roadmap

- Build an API with Node JS
- Internationalisation with i18next

## Contact

Created by [Capucine Soum](mailto:soum.capucine@gmail.com) - feel free to contact me!
