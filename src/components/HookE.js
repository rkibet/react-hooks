import React,{useContext} from 'react'
import HookF from './HookF'
import {userContext,ChannelContext} from '../App'


function HookE() {
    const user =useContext(userContext)
const channel =useContext(ChannelContext)
    return (
        <div>
           user Context : {user}  User Channel :{channel}
        </div>
    )
}

export default HookE
