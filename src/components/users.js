import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../actions/users'

function Users() {
  const { users, loading, error } = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  console.log('Users rendered')
  return (
    <>
      <h2>Users</h2>
      {loading ? <div>loading...</div> : <div>...</div>}
      {error && <div>{error}</div>}
      {/* <button onClick={() => dispatch(getUsers())}>Get Users</button> */}
      {users.length > 0 &&
          <ul>
            {users.map(user =>
              <li key={user.id}>{user.name}, {user.website}</li>  
            )}
          </ul>
       }
    </>
  )
}

export default Users




    // "id": 1,
    // "name": "Leanne Graham",
    // "username": "Bret",
    // "email": "Sincere@april.biz",
    // "address": {
    //   "street": "Kulas Light",
    //   "suite": "Apt. 556",
    //   "city": "Gwenborough",
    //   "zipcode": "92998-3874",
    //   "geo": {
    //     "lat": "-37.3159",
    //     "lng": "81.1496"
    //   }
    // },
    // "phone": "1-770-736-8031 x56442",
    // "website": "hildegard.org",
    // "company": {
    //   "name": "Romaguera-Crona",
    //   "catchPhrase": "Multi-layered client-server neural-net",
    //   "bs": "harness real-time e-markets"
    // }
  