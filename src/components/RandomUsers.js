import React, { useState, useEffect } from 'react'
import { Typography, Icon } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SearchIcon from '@mui/icons-material/Search';


const GetTableData = ({ data }) => {
  return (
    <>
      {Object.values(data).map((x, idx) =>
        <td key={idx}>{x}</td>
      )}
    </>
  )
}

function RandomUsers() {
  const [users, setUsers] = useState([])
  const [sortDir, setSortDir] = useState({})
  const [currSort, setCurrSort] = useState('')
  const [filtered, setFiltered] = useState('')

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(response => setUsers(response.results))
    .catch(err => {
      console.log(err)
    })
  }, [])

  

  const flatten = (data) => {
    const { name: { first, last }, email } = data
    const { street: { number, name }, city, state, postcode, country, 
    coordinates: { latitude, longitude },
    timezone: { description, offset } } = data.location

    return {
      name: `${first} ${last}`,
      email,
      street: `${number} ${name}`,
      city,
      state,
      postcode: ''+postcode,
      country,
      latitude,
      longitude,
      timezone: description,
      offset,
    }
  }

  const doSort = array => {
     const dir = sortDir[currSort]
     const newarr = [...array]
     if (dir === 'asc') {
        newarr.sort((a, b) => 
            a[currSort] < b[currSort] ? -1 : a[currSort] > b[currSort] ? 1 : 0
     )}
     else {
        newarr.sort((a, b) => 
          a[currSort] > b[currSort] ? -1 : a[currSort] < b[currSort] ? 1 : 0
      )}
      return newarr
  }

  const getUsers = () => {
    let array = []
    for (const u of users) {
      const user = flatten(u)
      if (!filtered) {
        array.push(user)
      }
      else {
        if (Object.values(user).join('').toLowerCase().includes(filtered.toLowerCase())) {
          array.push(user)
        }
      }
    }
   return currSort ? doSort(array) : array
  }

  const orderBy = header => {
    const dir = !sortDir[header] ? 'asc' : sortDir[header] ==='asc' ? 'des' : 'asc'
    setSortDir(prev => ({ ...prev, [header]: dir }))
    setCurrSort(header)
  }

  const getSortIcon = (header) => {
    if (header !== currSort) return null
    const dir = sortDir[header]
    if (dir === 'des') {
      return (<ArrowDownwardIcon fontSize='small' />)
    }
    else if (dir === 'asc') {
      return (<ArrowUpwardIcon fontSize='small' />)
    }
  }

  return (
    <>
      <Typography sx={{ mt: 3, mb: 2 }} variant = 'h3'>Random Users, filtering and sorting</Typography>
      <div>
        <input style={{ marginBottom: '5px' }} name='filtered' value={filtered} onChange={(e) => setFiltered(e.target.value)} />
       <SearchIcon fontSize='large' />
      </div>
      {users.length > 0 &&
        <table>
          <thead>
          <tr style={{ textAlign: 'left' }}>
            {Object.keys(flatten(users[0])).map((header, idx) => 
             <th key={idx} onClick={() => orderBy(header.toLowerCase())}>{header}{getSortIcon(header)}</th>
            )}
          </tr>
          </thead>
          <tbody>
            {getUsers().map((user, idx) => (
              <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? 'white' : 'lightgray' }}>
                <GetTableData data={user} />
              </tr>
            ))}
          </tbody>
        </table> 
      } 
    </>
  )
}

export default RandomUsers