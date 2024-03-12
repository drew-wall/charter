const Keyboard = ({ charClass, tile, handleClick }) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return (
      <div className='wordle-keyboard'>
        {[...chars].map((char, idx) =>
         <button className={charClass[char] || ' '} style={{ fontSize: '20px', marginLeft: '2px' }} onClick={() => handleClick(char)} key={idx}>
          {char}
        </button>
        )}
         <button disabled={!tile} onClick={() => handleClick('backspace')}>Backspace</button>
      </div>
    )
  }

  export default Keyboard