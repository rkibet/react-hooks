import React,{useState,useEffect} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function CustomHookTwo() {
    const [count,setCount]=useState(0)
    const incrementHook=()=>{
        setCount(count+1)
    }
useDocumentTitle(count)
    return (
        <div>
            <h1>Custom Hook Two</h1>
            <h2>{count}</h2>
            <button onClick={incrementHook}>Click Increment Two</button>
        </div>
    )
}

export default CustomHookTwo
