import React,{useState,useEffect} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function CustomHooks() {
    const [count,setCount]=useState(0)
    const incrementCounter=()=>{
        setCount(count+1)
    }
   useDocumentTitle(count)

    return (
        <div>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button onClick={incrementCounter}>Click to Count</button>
        </div>
    )
}

export default CustomHooks
