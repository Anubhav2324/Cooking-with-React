import React, {useState, useContext} from 'react'
import { ThemeContext } from './App'

export default function CounterHooks({initialCount}) {
  console.log('CounterHooks')
    const style = useContext(ThemeContext)
    const [count, setCount] =useState(initialCount)
    return(
      
        <div>
          <button style={style} onClick={() => setCount( prevCount => prevCount - 1)}>-</button>
          <span>{count}</span>
          <button style={style} onClick={() => setCount( prevCount => prevCount + 1)} >+</button>
        </div>
      )
}