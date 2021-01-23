import React,{useState,useMemo} from 'react'

function CounterHook() {

const [countOne,setCountOne]=useState(0)
const [counTwo,setCountTwo]=useState(0)

const incrementOne=()=>{
    setCountOne(countOne+1)
}
const incrementTwo=()=>{

    setCountTwo(counTwo+1)
}
const isEven=useMemo(()=>{
    let i=0
    while(i<2000000000) i++
return countOne %2===0
},[countOne])

    return (

        <div>
           <div>
               <button onClick={incrementOne}> Count One   {countOne}</button>
               <span>{isEven ? 'Even':'Odd'}</span>
               </div>
           <div><button onClick={incrementTwo}> Count two   {counTwo}</button></div>
               
        </div>
    )
}

export default CounterHook
