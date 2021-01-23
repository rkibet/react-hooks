import React,{useState} from 'react'
import useCounter from '../hooks/useCounter'

function CustomHookCounter() {
    const [count,incrementCounter,decrementCounter,resetCounter]=useCounter()
    return (
        <div>
            <h2>Count-{count}</h2>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
}

export default CustomHookCounter
