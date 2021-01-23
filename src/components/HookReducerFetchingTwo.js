import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const initialValue={
    loading:true,
    error:'',
    post:{}
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
        return {
            loading:false,
            post:action.payload,
            error:''
        }
        case 'FETCH_FAIL':
            return{
                loading:false,
                post:'',
                error:'Something Went Wrong'
            }
        default:
            return state
    }
}

function HookReducerFetchingTwo() {
const [state,dispatch]=useReducer(reducer,initialValue)
useEffect(()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then(resposnse=>{
        dispatch({type:'FETCH_SUCCESS',payload:resposnse.data})
    })
    .catch(error=>{
        dispatch({type:'FETCH_FAIL'})
    })
},[])
    return (
        <div>
            {state.loading?'Loading...':state.post.title}
            {state.error?state.error:null}
        </div>
    )
}

export default HookReducerFetchingTwo
