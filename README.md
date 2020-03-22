# react-redux-boilerplate
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Using Redux with React can make managing state and props a whole lot easier, however, setting up Redux boilerplate SUCKS. This project provides a React/Redux boilerplate on top of Create React App for you to utilize in your own applications, and demonstrates integrating Redux with React using the example of a simple Posts List application.

## Disclaimer
Instead of sticking with a bare boilerplate, we decided to make this repository emulate a simple React-Redux Posts List app to take away the abstraction of working with React and Redux together. Hopefully seeing the entire app connected and applied to a real-life example makes the role of each component clear.

## Dependencies
- `axios` - promised based HTTP client for making HTTP requests
- `bootstrap` - Bootstrap library
- `json-server` - provides a full fake REST API for updating props 
- `react-helmet` - allows you to dynamically modify HTML head elements, such as title or meta tags
- `react-redux` - lets you use React Redux with your React app
- `react-router-dom` - a collection of navigational components that compose declaratively with your application
- `reactstrap` - easy to use React Bootstrap 4 components compatible with React 16+
- `redux` - a predictable state container for JavaScript apps
- `redux-thunk` - middleware that allows you to write action creators that return a function instead of an action

## Instructions after Cloning
1. Remove json-server dependency and connect to your own API.
2. Replace Posts data with your own; the action creators, reducers, and organism components need to be updated accordingly.
3. axios and Bootstrap/reactstrap are optional dependencies. Feel free to replace axios with another HTTP client and Bootstrap with another CSS framework.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
