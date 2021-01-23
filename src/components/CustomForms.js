import React,{useState,useEffect} from 'react'
import useInput from '../hooks/useInput'

function CustomForms() {
    // const [firstName,setFirstName] = useState('')
    // const [lastName,setLastName] = useState('')

    const[firstName,bindFirstName,resetFirstName]=useInput('')
    const[lastName,bindLastName,resetLastName]=useInput('')

    const submitHandler=(e)=>{
        e.preventDefault()
        alert(`Welcome ${lastName}  ${firstName}`)
        resetFirstName()
        resetLastName()

    }
    return (
        <div>
            <h1>Custom Hooks Form</h1>
            <form onSubmit={submitHandler}>
               <div>
               {/* <input type='text' onChange={e=>setFirstName(e.target.value)}/> */}
               <input type='text' {...bindFirstName}/>
               </div>
              <div>
              {/* <input type='text' onChange={e=>setLastName(e.target.value)}/> */}
              <input type='text' {...bindLastName}/>
              </div>
              <button>Submit</button>

            </form>
        </div>
    )
}

export default CustomForms
