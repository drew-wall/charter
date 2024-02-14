import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'


const endpoint = 'https://hacker-news.firebaseio.com/v0/'

const JobBoard = () => {
  const [jobs, setJobs] = useState([])

  const getJobs = async () => {
    const arr = []
    try {
      const respIds = await fetch(`${endpoint}jobstories.json`)
      const resIds = await respIds.json()
      
      for (const id of resIds) {
        const resp = await fetch(`${endpoint}item/${id}.json`)
        const res = await resp.json()
        arr.push(res)
      }
      setJobs(arr)
    }
    catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getJobs()
  }, [])

  return (
    <>
      <Typography style={{ color: 'orange' }} sx={{ mt: 3, mb: 2 }} variant ='h4'>Hacker News Job Board</Typography>
      {jobs.length > 0 &&
        jobs.map(job =>
          <div className='jobBoardItem' key={job.id}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>
              {job.title}
            </div>
            <div>
              <span>By {job.by} - </span>
              <span>{(new Date(job.time*1000).toLocaleString())}</span>
            </div>
          </div>
        )
      }
    </>
  )
}

export default JobBoard