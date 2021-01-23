import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCounter=()=>{
        this.setState(prev=>{
            return{count:prev.count+1}
        })
    }
    render() {
        const{count}=this.state
        return (
            <div>
                <h1>Click Counter on Class Component</h1>
                <h2>{count}</h2>
                <button onClick={this.incrementCounter}>Increment Counter</button>
            </div>
        )
    }
}

export default ClassComponent
