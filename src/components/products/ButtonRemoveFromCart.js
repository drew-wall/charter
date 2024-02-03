const ButtonRemoveFromCart = ({ disabled, handleclick }) => {
  return (
    <button disabled={disabled} 
      style={{ width: '70%', color: 'white', backgroundColor: disabled ? 'lightgray' : 'red' }}
      onClick={handleclick}>
      Remove From Cart
    </button>
  )
}

export default ButtonRemoveFromCart