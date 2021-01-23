import React,{useContext} from 'react'
import {CounterContext} from '../App'

function HookReducerA() {
    const countContext =useContext(CounterContext)
    return (
        <div>
            HookReducerA{countContext.countDispatch}
            <button onClick={ ()=>countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=> countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default HookReducerA
