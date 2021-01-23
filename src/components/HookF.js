import React from 'react'
import {userContext,ChannelContext} from '../App'

function HookF() {
    return (
        <userContext.Consumer>
            {
                user=>{
                    return (
                        <ChannelContext.Consumer>
                            {
                                channel=>{
                                    return<div>
                                        <h1>Your User name is:{user},your Channel is :{channel}</h1>
                                    </div>
                                }
                            }
                        </ChannelContext.Consumer>
                    )
                }
            }
        </userContext.Consumer>
    )
}

export default HookF
