import {useState} from 'react'

function useCounter(initialValue=0) {
    const [count,setCount]=useState(initialValue)
    const incrementCounter=()=>{
        setCount(prev=>prev+1)
 
     }
    const decrementCounter=()=>{
     setCount(prev=>prev-1)
     }
    const resetCounter=()=>{
     setCount(initialValue)
     }
     return[count,incrementCounter,decrementCounter,resetCounter]
}

export default useCounter
