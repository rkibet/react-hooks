import React,{useState,useEffect} from 'react'

function HooksCounterFive() {

    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    
    useEffect(()=>{
        console.log('Updating')
        document.title=`${count} clicked`
    },[count])

    return (
        <div>
            <h1>Hooks Count Five </h1>
            <h2>{count}</h2>
            <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Click To Increment</button>
        </div>
    )
}

export default HooksCounterFive
