import React, { useState } from 'react'

function HookCounter2() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const increamentfive =()=>{
        for(let i=0; i<5; i++){
            setCount(prevCount=>prevCount + 1)
        }
    }
  return (
    <div>
        <h1>Counter two: {count}</h1>
        <button onClick={()=> setCount(initialCount)}>Reset</button>
        <button onClick={()=> setCount(count+1)}>Icreament</button>
        <button onClick={()=> setCount(count-1)}>Decreament</button>
        <button onClick={increamentfive}>Icreament to 5</button>
    </div>
  )
}

export default HookCounter2