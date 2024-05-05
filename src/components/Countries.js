import React, { useState, useEffect } from 'react'

const baseUrl = 'https://restcountries.com/v3.1'

const Country = ({country}) => {
  return (
    <h5>{country.name.common}, {country.capital}</h5>
  )
}

function Countries() {
  const [countries, setCountries] = useState([])
  const [capital, setCapital] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      let url
      if (!capital) {
        url = `${baseUrl}/all`
      }
      else {
        url = `${baseUrl}/capital/${capital}`
      }
      try {
        const data = await fetch(url)
        const parsed = await data.json()
        setCountries(parsed)
      }
      catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [capital])

  return (
    <>
      <h3>Countries, Capitals</h3>
      {countries.map(country =>
        <Country key={country.name.common} country={country} />
      )}
    </>
  )
}

export default Countries