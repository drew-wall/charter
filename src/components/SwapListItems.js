import React, { useState } from 'react'

const List = ({ title, list, hasCheckbox, onCbChange}) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {list.map((item, idx) => {
          return (
            <div>
              <li key={item.name}>
               {hasCheckbox &&
                 <input type='checkbox' checked={item.checked} onChange={(() => onCbChange(idx))} />}
               {item.name}
              </li>
            </div>
          )})}
      </ul>
    </div>
  )
}
  function SwapListItems() {
    const [list1, setList1] = useState(
      [{name: 'list1 1', checked: false},
       {name: 'list1 2', checked: false},
       {name: 'list1 3', checked: false}
      ],
    )
    const [list2, setList2] = useState(
      [{name: 'list2 a'},
       {name: 'list2 b'},
       {name: 'list2 c'}
      ],
    )

    const cbChanged = idx => {
      const newlist1 = [...list1]
      const newlist2 = [...list2]
      const name1 = newlist1[idx].name
      const name2 = newlist2[idx].name
      newlist1[idx].checked = !newlist1[idx].checked
      if (newlist1[idx].checked) {       
        newlist2[idx].name = name1
        newlist1[idx].name = name2
      }
      else {
        newlist1[idx].name = name2
        newlist2[idx].name = name1
      }
      setList1(newlist1)
      setList2(newlist2)
    }
  
    return (
      <>
        <h1>Swap List Items</h1>
        <List title='List1' list={list1} hasCheckbox={true} onCbChange={cbChanged}/>
        <List title='List2' list={list2} />
      </>
    )
}

export default SwapListItems