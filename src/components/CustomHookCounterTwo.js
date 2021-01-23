import React,{useState} from 'react'
import useCounter from '../hooks/useCounter'

function CustomHookCounterTwo() {
   const [count,incrementCounter,decrementCounter,resetCounter]=useCounter()
    return (
        <div>
            <h1>Counter Two Hooks</h1>
            <h2>{count}</h2>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
}

export default CustomHookCounterTwo
