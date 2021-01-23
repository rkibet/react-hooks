import React,{useState} from 'react'

function HooksCounterThree() {
    const [name,setName]=useState({firstName:'',lastName:''})

    return (
        <div>
            <h2>Input Form</h2>
            <form>
                <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
<br/>
                <input type='text' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
            </form>
            <h2>Your First Name is :{name.firstName}</h2>
            <h2>Your Last Name is :{name.lastName}</h2>
            <h3>{JSON.stringify(name)}</h3>
        </div>
    )
}

export default HooksCounterThree
