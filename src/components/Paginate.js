import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Button, Input, Typography } from '@mui/material'

const PageBar = ({ numPages, pageSelected, page }) => {
  const pages = [...Array(numPages).keys()];

  return (
    <div>
      <Button disabled={page === 0} onClick={() => pageSelected(page - 1)}>
         Previous
      </Button>
      {pages.map(p =>
        <Button  size="small"
           onClick={() => pageSelected(p)} key={p} variant={p === page ? 'contained' : 'outlined'}>
           {p+1}
        </Button>)}
        <Button disabled={page === numPages - 1} onClick={() => pageSelected(page + 1)}>
           Next
        </Button>
    </div>
  )
}

function Paginate() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(0)
  const [pageSize, setPageSize] = useState(25)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(setPosts)
  }, [])

  const numPages = useMemo(() => {
     return Math.ceil(posts.length / pageSize)
  }, [posts, pageSize])

  const handlePageSize = (e) => {
    if (e.target.value) {
      setPageSize(+e.target.value)
      setPage(0)
    }
  }

  const getPostsByPage = () => {
    return posts.slice(page * pageSize, pageSize+(page * pageSize))
  }

  const handlePageSelected = useCallback((page) =>  {
    setPage(page)
  }, [])
  

  return (
    <>
      <Typography sx={{mt: 5}} variant="h4">Pagination Example</Typography>
      <h4>Enter Number of Items per Page:</h4>
      <Input sx={{mb: 3}} name='pagesize' type='number' max="100"
         value={pageSize} onChange={handlePageSize} />
      <PageBar numPages={numPages} pageSelected={handlePageSelected} page={page}/>
      <ul>
        {getPostsByPage().map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  )
}

export default Paginate