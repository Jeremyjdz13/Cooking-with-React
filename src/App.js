import React, { useState } from 'react'
import Counter from './counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()

function App() {
  console.log('Render App')
  const [theme, setTheme] = useState('green')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme}}>
      {/* // initialCount is a prop we are passing to child components.  Props always pass from Parent to Child.  Not the other way. */}

      Counter
      <Counter initialCount={0} />
      CounterHooks
      <CounterHooks initialCount={0} />
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
    )
}

export default App;
