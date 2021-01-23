import React,{useState} from 'react'

function HooksCounter() {
    const [count,setCount]=useState(0)
    return (
        <div>
            <h1>Hooks Counter</h1>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Click To Increment</button>
        </div>
    )
}

export default HooksCounter
