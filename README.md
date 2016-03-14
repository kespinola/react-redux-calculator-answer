# Redux Calculator
> Learn how to manage the state of your react component using redux.

![calc image](https://github.com/ksespinola/react-redux-calculator/blob/master/src/assets/images/calculator.png?raw=true)

## Getting Started
1. Create .env
```
HOST=localhost
PORT=8080

```
2. Install app dependencies found in package.json
```
npm install
```

3. Start building your calculator
```
npm run dev - begins a webpack dev server
```
_This script starts a webpack dev server. The app url is depends on your .env file. http://localhost:8080 for this example_

## Lesson Plan

### Chapter 1: Creating and Linking A Store to React
- What is a store?
- How does the store manage the application state?
- How do I create a store?

### Chapter 2: Updating Your Application State
- What is a reducer?
- How do I a create a reducer?
- How do I register a reducer with the store?
- How do libraries like `reduxify` and `react-actions` help?

### Chapter 3: A look at `react-redux`
- How do I connect my store to react?
- How does `connect(selector, mapDispatch)(Component)` expose your store to the component?

### Chapter 4: Display State of The Application
- What is `reselect`?
- How do I create a selector?
- How do components consume selectors?

### Chapter 5: Trigger Actions From Your Component
- How does `mapDispatch` work?
- How do I map my actions to react props?
