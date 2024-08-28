import React, { useState, useEffect } from 'react'
import { useDebounce } from '../hooks/useDebounce'

const Posts = ({ post, changeId, id }) => {
  // console.log(post, id)
  return (
    <div>
      <input type='text' value={id} onChange={changeId} />
      {post && <div>{post.title}</div>}
    </div>
  )
}

function PostsById() {
  const [post, setPost] = useState([])
  const [id, setId] = useState('1')
  const debounceId = useDebounce(id)

  useEffect(() => {
    const getPost = async () => {
      console.log(debounceId)
      if (!debounceId) return
      try {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${debounceId}`)
        const res = await resp.json()
        setPost(res)
      }
      catch (err) {
        console.error(err)
      }
    }
    getPost()
  }, [debounceId])

  const handleChange = (e) => {
    setId(e.target.value)
  }

  return (
    <>
      <h3>Posts By Id</h3>
      <Posts post={post} changeId={handleChange} id={debounceId}/>
    </>
  )
}

export default PostsById