import React from 'react'
import BackspaceTwoToneIcon from '@mui/icons-material/BackspaceTwoTone';


const Keyboard = ({charClass, backspaceDisabled, handleClick }) => {
    const lines = [
      ['QWERTYUIOP'],
      ['ASDFGHJKL'],
      ['ZXCVBNM<']
    ]

    const GetButton = ({ char }) => {
      if (char !== '<') {
        return (
           <button className={charClass[char] || ' '} 
             style={{ fontSize: '20px', marginLeft: '2px' }} 
             onClick={() => handleClick(char)}
           >
             {char}
           </button>
          )
      }

       return (
          <button disabled={backspaceDisabled} 
            onClick={() => handleClick('backspace')}
          >
            <BackspaceTwoToneIcon fontSize='small' />
          </button>
      )
    }

    return (
      <div className='wordle-keyboard'>
        {lines.map((line, i) => 
           <div key={i} style={{ marginLeft: i === 1 ? '10px' :  i === 2 ? '25px' : '0px'}}>
           {line.toString().split('').map((char) => 
              <GetButton key={char} char={char} />
           )}
          </div>       
        )}
      </div>
    )
  }

  export default Keyboard
