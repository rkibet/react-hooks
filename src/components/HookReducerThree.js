import React,{useReducer} from 'react'

const initialValue=0;
const reducer=(state,action)=>{
    switch(action){
        case'increment':
        return state+1;

        case 'decrement':
        return state-1;

        case 'reset':
        return initialValue;

       default:
        return state


    }
}
function HookReducerThree() {
    const [count,dispatch]=useReducer(reducer,initialValue)
    const [count2,dispatch2]=useReducer(reducer,initialValue)
    return (
        <div>
        <div>{count}</div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
            <div>{count2}</div>
            <button onClick={()=>dispatch2('increment')}>Increment</button>
            <button onClick={()=>dispatch2('decrement')}>Decrement</button>
            <button onClick={()=>dispatch2('reset')}>Reset</button>
            
            
        </div>
    )
}

export default HookReducerThree
