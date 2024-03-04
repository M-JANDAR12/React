import React from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from 'react'
function Post() {
  let {id} = useParams()
  const [postObject, setPostObject] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:8484/posts/byId/${id}`).then((response) => {
      setPostObject(response.data)
    })
  }, [])
  return (
    
    <div>{postObject.title}</div>
  )
}

export default Post
