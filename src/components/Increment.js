import React, { useCallback, useState } from "react";
function Increment() {
  const [count, setCount] = useState(0);
 
  const increment = useCallback(() => {
	setCount(c => c + 1)
  }, [])

   return (
	<div style={{ marginTop: '10px' }}>
  	<button onClick={increment}>Increment</button>
  	<p>Count: {count}</p>
	</div>
  )
}
 
export default Increment