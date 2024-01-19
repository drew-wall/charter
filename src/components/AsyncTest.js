import React, { useState, useEffect } from 'react'


function AsyncTest() {
   const [data, setData] = useState([])

   useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json();
        setData(json);
      };
      fetchData();
    }, [])

    return (
      <div>{data.map((d) => <p key={d.id}>{d.name}</p>)}</div>
    )
  }

  export default AsyncTest
