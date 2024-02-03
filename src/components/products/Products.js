import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Typography } from '@mui/material'
import Cart from './Cart'
import ButtonAddToCart from './ButtonAddToCart'
import ButtonRemoveFromCart from './ButtonRemoveFromCart'


const productApi = 'https://dummyjson.com/products'

const Products = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const getProducts = async () => {
    try {
      const resp = await axios.get(productApi)
      setProducts(resp.data.products)
    }
    catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  const addToCart = (prodidx, prodid) => {
    const newcart = [...cart]
    for (let i = 0; i < newcart.length; i++) {
      if (newcart[i].id === prodid) {
        newcart[i].qty += 1
        setCart(newcart)
        return
      }
    }
    newcart.push({ ...products[prodidx], qty: 1 })
    setCart(newcart)
  }

  const removeFromCart = (prodid, removeall = false) => {
    if (removeall){
      setCart(cart.filter(x => x.id !== prodid))
      return
    }
    const newcart = [...cart]
    for (let i = 0; i < newcart.length; i++) {
      if (newcart[i].id === prodid) {
        newcart[i].qty -= 1
        if (newcart[i].qty === 0) {
          setCart(cart.filter(x => x.id !== prodid))
        }
        else{
          setCart(newcart)
        }
        return
      }
    }
  }

  const isInCart = product => {
     for (const c of cart) {
        if (c.id === product.id) {
          return true
        }
     }
     return false
  }

  return (
    <>
      <Typography sx={{ mt: 3 }} variant='h3'>Shopping Cart</Typography>
      <div style={{ display: 'flex' }}>
        <Cart cart={cart} incQty={addToCart} decQty={removeFromCart} clearCart={setCart} />
      {products.length > 0 &&
        <div className='products-container'>
          {products.map((prod, idx) =>
            <div key={prod.id} className='product-items'>
              <img src={prod.thumbnail} alt={prod.title} height="200" width="200" />
              <span>{prod.title}, ${prod.price} </span>
              <ButtonAddToCart handleclick={() => addToCart(idx, prod.id)} />
              <ButtonRemoveFromCart disabled={!isInCart(prod)} handleclick={() => removeFromCart(prod.id, true)} />
            </div>
            )}
          </div>
          }
        </div>
    </>
  )
}

export default Products