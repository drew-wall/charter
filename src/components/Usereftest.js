import React, { useState, useRef, useCallback } from "react";
 function Usereftest() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
 
  const increment = useCallback(() => {
	countRef.current = countRef.current + 1;
	setCount(countRef.current);
  }, []);
 
  return (
	<div>
    <h3>Usereftest</h3>
  	<button onClick={increment}>Increment</button>
  	<p>Count: {count}</p>
	</div>
  );
}
 export default Usereftest;