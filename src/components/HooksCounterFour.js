import React,{useState} from 'react'

function HooksCounterFour() {
    const [items,setItems]=useState([])
    const addItems=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }


    return (
        <div>
            <h2>Hooks Four </h2>
            <hr/>
            <button onClick={addItems}>Add Items</button>
            <ul>
                {items.map(item=><li key={item.id}>{item.value}</li>)}
            </ul>
        </div>
    )
}

export default HooksCounterFour
