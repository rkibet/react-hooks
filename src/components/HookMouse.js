import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

   const logMouseMove=(e)=>{
        console.log('mouse move')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('use effect')
        window.addEventListener('mousemove',logMouseMove)
        return ()=>{
            console.log('Component Unmounted')
            window.removeEventListener('mousemove',logMouseMove)
        }
    },[])
    return (
        <div>
            X:{x}Y:{y}
        </div>
    )
}

export default HookMouse
