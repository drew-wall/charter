const Cart = ({ cart, incQty, decQty, clearCart }) => {
    const total = cart.reduce((acc, val) => acc + (val.qty * val.price), 0)
  
    return (
      <div className='products-cart'>
        <h3 style={{ marginLeft: '5px' }}>   
          Cart: {total > 0 ? 
            <>
              <span>${total.toLocaleString()}</span>
              <button onClick={() => clearCart([])} style={{ marginLeft: '20px' }}>
                Clear Cart
              </button>
            </> : null}
        </h3>
        {cart.length > 0 &&
         cart.map((prod, idx) =>
         <div style={{ marginBottom: '5px', marginLeft: '5px' }} key={prod.id}>
            <img style={{ marginRight: '5px' }} src={prod.thumbnail} height="30" width="30" alt="" />
            {prod.title}, ${prod.price.toLocaleString()}
            <button style={{ marginLeft: '3px' }}
               onClick={() => incQty(idx, prod.id)}>
               +
            </button>
            <button 
               onClick={() => decQty(prod.id)}>
               -
            </button>
            <span> Qty: {prod.qty}</span>
         </div>
        )}
      </div>
    )
  }

  export default Cart
