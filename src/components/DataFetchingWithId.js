import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchingWithId() {

    // const [postIds,setPostId]=useState([])

    const [post,setPost]=useState({})

    const [id,setId]=useState(1)
    const [buttonId,setButtonId]=useState(1)

    useEffect(()=>{
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(error=>{console.log(error)})
    },[buttonId])

   const fetchHandler=()=>{
        setButtonId(id)
    }
    return (
        <div>
            <input type='text' value={id} onChange={e =>setId(e.target.value)}/>
            <button onClick={fetchHandler}>Fetch Title</button>
            <h2>{post.title}</h2>
            {/* <ul>
                {
                    postIds.map(postId=>(
                        <li key={postId.id}>{postId.title}</li>
                    ))
                }
            </ul> */}
        </div>
    )
}

export default DataFetchingWithId
