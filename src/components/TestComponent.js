import React, { useState } from 'react'

function TestComponent({initialCount = 0}) {
  const [count, setCount] = useState(initialCount);
  const handleClick = () => {
    setCount(count + 1);
  };
 return (
	<div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

  export default TestComponent