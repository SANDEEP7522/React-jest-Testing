import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='app  m-4 p-4'>
     <p>count: {count}</p>
     
     <button onClick={() => setCount(count + 1)}  
       
      >click</button>
   </div>
    </>
  )
}

export default App
