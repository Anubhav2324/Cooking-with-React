import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext()

function App() {
  console.log('App')
  const [theme, setTheme] = useState('green')
  return(
    <ThemeContext.Provider value={{background: theme}}>
    Counter
    <Counter initialCount = {0} />
    CounterHooks
    <CounterHooks initialCount = {0} />
    <button onClick={()=> setTheme(prevTheme => {
      return prevTheme === 'red' ? 'blue' : 'red'
    })}>Toggle Context</button>
    </ThemeContext.Provider>
  )
}

export default App;
