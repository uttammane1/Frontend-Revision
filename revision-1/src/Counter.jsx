

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter; 


