import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

//   function increment (){
//     setCount(count + 1);
//   }
//   function decrement (){
//     setCount(count - 1);
//   }
// }

  const increment = () =>{setCount(count + 1)};
  const decrement = () => {setCount(count - 1)};
  return (
    <div>
       {count} 
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>

  );
};

export default Count;

// export default count;