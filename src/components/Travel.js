import React, { useState } from 'react'


const destinations = [
  { start: 'Berlin',
    dest: 'Paris',
    vehicles: [
      { name: 'Car', price: 45 },
      { name: 'Train', price: 24 },
      { name: 'Plane', price: 55 },
    ]
  },
]

const Travel = () => {
  const [startPoint, setStartPoint] = useState('')
  const [destination, setDestination] = useState([])
  const [vehicle, setVehicle] = useState('')
  const [price, setPrice] = useState(0)

  const getPrice = (e) => {
    e.preventDefault()
    for (const d of destinations) { 
      if ((startPoint === d.start && destination === d.dest) ||
          (startPoint === d.dest && destination === d.start)) {
        const v = d.vehicles.find(v => v.name === vehicle)
        if (v) {
          setPrice(v.price)
        }
        else {
          setPrice('')
        }
      }
    }
  }
  return (
    <>
      <h2>Travel</h2>
      <form onSubmit={e => getPrice(e)}>
        <label>
          Starting Point:
          <input type='text' name='startingpoint' value={startPoint} 
            onChange={(e) => setStartPoint(e.target.value)} />
        </label>
        <br />
        <label>
          Destination:
          <input type='text' name='destination' value={destination} 
            onChange={(e) => setDestination(e.target.value)} />
        </label>
        <br />
        <label>
          Vehicle:
          <input type='text' name='vehicle' value={vehicle} 
            onChange={(e) => setVehicle(e.target.value)} />
        </label>
        <input type='submit' name='submit' />
      </form>
      <h3>Price: {price}</h3>
    </>
  )
}

export default Travel