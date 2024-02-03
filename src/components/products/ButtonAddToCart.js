const ButtonAddToCart = ({ handleclick }) => {
  return (
    <button
      style={{ width: '70%', color: 'white', backgroundColor: 'green'}}
      onClick={handleclick}>
      Add To Cart
    </button>
  )
}

export default ButtonAddToCart