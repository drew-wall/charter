import { Typography, Button } from '@mui/material'
import React, { useState } from 'react'

const cart1 = ['Apples', 'Potatos', 'Cherrys', 'Lettuce', 'Pears', 'Pineapple']
const cart2 = ['Broccoli', 'Grapes', 'Spinach', 'Kale', 'lemons', 'Watermelon']

const Cart = ({ cart, cartText }) => {
  return (
    <>
      <div className='cart'>
        <div className='cart-header'>{cartText}</div>
        {cart.map((c, idx) =>
          <div className='cart-items' key={idx}>{`${idx+1}. ${c}`}
          </div>
        )}
      </div>
    </>
  )
}

function SwapOdds() {

  const [leftCart, setLeftCart] = useState(cart1)
  const [rightCart, setRightCart] = useState(cart2)

  const swap = () => {
    const left = [...leftCart]
    const right = [...rightCart]

    for (let i = 0; i < left.length; i += 2) {
      const lefti = left[i]
      left[i] = right[i]
      right[i] = lefti
    }
  
    setLeftCart(left)
    setRightCart(right)
  }

  return (
    <>
      <Typography sx={{ mb: 3 }} variant='h3'>Swap Odds</Typography>
      <div className='swapodds-container'>
        <Cart cart={leftCart} cartText='Cart 1' />
        <Button 
           sx={{ ml: 3, mr: 3 }}
           className='swapodds-button'
           onClick={swap}
           variant='contained'>
          Swap Odds 
        </Button>
        <Cart cart={rightCart}  cartText='Cart 2' />
      </div>
    </>
  )
}

export default SwapOdds