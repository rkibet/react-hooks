import React,{useEffect,useRef} from 'react'

function HookRef() {
    const inputRef=useRef(null)

    useEffect(()=>{
        //focus
        inputRef.current.focus()
    },[])

    return (
        <div>
            <h2>Hooks Ref</h2>
            <input ref={inputRef} type='text'/>
        </div>
    )
}

export default HookRef
