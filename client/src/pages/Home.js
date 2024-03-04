import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
function Home() {
    const [listOfPosts, setListOfPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8484/posts").then((response) => {
      setListOfPosts(response.data)
      console.log(response.data)
    })
  }, [])

  let history = useNavigate()


  return (
    <div>
        {listOfPosts.map((value,key) => { 
        return <div className="post" onClick={() => history(`/post/${value.id}`)}>
          <div className="title"> {value.title}</div>
          <div className='body'>{value.postText}</div>
          <div className='footer'>{value.username}</div>
          </div>; 
        })}
    </div>
  )
}

export default Home