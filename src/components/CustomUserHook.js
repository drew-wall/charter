import React from 'react'
import useRandomUsers from '../hooks/useRandomUsers'
import { Typography } from '@mui/material'


const Users = ({ first, last, thumbnail }) => {
  return (
    <div style={{ minHeight: '80px' }}>
      <span>{first} </span>
      <span>{last} </span>
      <img src={thumbnail} alt={last} height="50" width="50" />
    </div>
  )
}
function CustomUserHook() {
  const [users, currIndex, loading, next, previous] = useRandomUsers()

  // console.log(users, currIndex)
  const user = users[currIndex] || ''

  return (
    <>
      <Typography variant='h3'sx={{ mt: 3, mb: 1}}>CustomUserHook</Typography>
      {loading ? <div>Loading...</div> 
      :
      <>
        <div>
        {users.length > 0 && users.map(({ first, last}, idx) => 
            <span style={ idx === currIndex ? { fontWeight: 'bold' } : { fontWeight: 'normal'} } 
               key={idx}>{first} {last} </span>
        )}
        </div>
        <div style={{ minHeight: '80px' }}>
          {users ? 
            <Users first={user.first} last={user.last} thumbnail={user.thumbnail}/>  : null}
        </div>
      </>
      }
       <div>
          <button disabled={currIndex <= 0} onClick={previous}>Previous</button>
          <button onClick={next}>Next</button>
        </div>
    </>
  )
}

export default CustomUserHook