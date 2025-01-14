// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

function reducer(state, action) {
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + action.step };
    case ACTIONS.DECREMENT:
      return { count: state.count - action.step };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
      // return state;
  }
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useState(initialCount)

  const [state, dispatch] = React.useReducer(reducer, { count: initialCount });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT, step });
  }

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  // const increment = () => setCount(count + step)
  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
