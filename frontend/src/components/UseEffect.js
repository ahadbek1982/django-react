import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)
    useEffect(
    ()=> {
        document.title = `You clicked ${count} times`
    }
    )
  return (
    <div>UseEffect <br/>
        <button onClick={()=> setCount(count+1)}>you clicked {count} titems</button>
    </div>
  )
}

export default UseEffect