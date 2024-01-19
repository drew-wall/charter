import React, { useState } from 'react'
import { Typography, Button } from '@mui/material'


const getLeftItems = numItems => {
  return Array(numItems).fill({}).map((_, idx) =>
    ({ value: idx + 1, checked: false, visible: true })
)}

const getRightItems = numItems => {
  return Array(numItems).fill({}).map((_, idx) =>
    ({ value: idx + 1, checked: false, visible: false })
)}

const List = ({ list, name, handleChange }) => {
  return (
    <>
     <div className='transfer-list'>
      {list.map(({ value, checked, visible }, idx) => 
        <div style={{ marginBottom: '10px', display: visible ? 'block' : 'none' }} 
          key={idx}>
          <input type='checkbox'
            onChange={() => handleChange(list, idx, name)}
            value={value}
            checked={checked} />
            {value}
        </div>
      )}
     </div>
    </>
  )
}

function TransferList({ numItems = 4 }) {
  const [left, setLeft] = useState(getLeftItems(numItems))
  const [right, setRight] = useState(getRightItems(numItems))

  const onCbChanged = (list, i, name) => {
    let newlist = [...list]
    newlist[i].checked = !newlist[i].checked
    if (name === 'left') setLeft(newlist)
    else setRight(newlist)
  }

  const transferItems = (name) => {
     let newleft = [...left]
     let newright = [...right]
     let listfrom, listto

     if (name === 'left') {
      listfrom = newleft
      listto = newright
     }
     else { 
      listfrom = newright
      listto = newleft
     }

     for (let i = 0; i < listfrom.length; i++) {
       if (listfrom[i].checked) {
          listfrom[i].checked = false
          listfrom[i].visible = false
          listto[i] = {value: i + 1, checked: false, visible: true}
       }
     }
     setLeft(name === 'left' ? listfrom : listto)
     setRight(name === 'right' ? listfrom : listto)
  }

  const isSomeChecked = list => {
    if (list.some(x => x.checked)) return false
    return true
  }

  return (
    <>
      <Typography sx={{ mt: 3, mb: 3 }} variant='h3'>Transfer List</Typography>
      <div className='flex'>
        <List list={left} name='left' handleChange={onCbChanged} />
        <div>
          <div className='transfer-button'>
            <Button disabled={isSomeChecked(left)} 
              onClick={() => transferItems('left')} variant='contained'>{'>'}</Button>
          </div>
          <div className='transfer-button'>
            <Button disabled={isSomeChecked(right)} 
              onClick={() => transferItems('right')} variant='contained'>{'<'}</Button>
          </div>
        </div>
        <List list={right} name='right' handleChange={onCbChanged} />
      </div>
    </>
  )
}

export default TransferList