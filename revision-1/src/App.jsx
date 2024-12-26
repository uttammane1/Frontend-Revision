import { useRef, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const hello = useRef(0);

  return (
       
      // <div>
      //   {count}
      //   <button onClick={()=>setCount(count -1)}>-</button>
      //   <button onClick={()=>setCount(count +1)}>+</button>
      // </div>
      <div>
        <input ref={hello}/>
        <button onClick={()=>hello.current.focus}>Click Me</button>


      </div>
  )
}

export default App
