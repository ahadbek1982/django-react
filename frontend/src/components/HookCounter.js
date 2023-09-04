import React, { useState } from 'react'

function HookCounter() {
    const [count, setCount] = useState(10)
  return (
    <div>
        <h1>Hook counter</h1>
        <button onClick={()=> setCount(count + 1 )}>Counter {count} </button>
    </div>
  )
}

export default HookCounter