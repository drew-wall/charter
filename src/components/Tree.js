import React, { useState } from 'react'

const tree = {
  children: [
    {name: 'src',
      children: [
        {name: 'components',
         children: [
           {name: 'Tree.js'},
           {name: 'TicTacToe.js'},
           {name: 'users.js'},
           {name: 'multiselectstates',
             children: [
              {name: 'MultiSelectStates.js'},
              {name: 'states.js'}
             ]
           }
         ]
        }
      ]
    },
    {name: 'hooks',
      children: [
        {name: 'useCounter.js'},
        {name: 'useDebounce.js'},
        {name: 'useLocalStorage.js'}
      ]
    },
    {name: 'package.json'},
    {name: 'README.md'},
    {name: 'server.js'},
  ]
}

const TreeItem = ({ item, depth}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div style={{ marginLeft: '20px', marginBottom: '5px', fontSize: '22px' }}>
      {item.children ? (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? '-' : '+'} {item.name}
        </button> 
       )
        : (
        <div>{item.name}</div>
      )}
      {isExpanded && (
        <div style={{ paddingLeft: `${depth * 6}px`}}>
        {item.children?.map((item, idx) => (
          <TreeItem key={idx} item={item} depth={depth + 1} />
        ))}
        </div>
      )}
    </div>
  )

}

const Tree = () => {
  return (
    <>
    <h2>Tree</h2>
      {tree.children.map((item, idx) =>
        <TreeItem key={idx} item={item} depth={1} />
      )}
    </>
  )
}

export default Tree