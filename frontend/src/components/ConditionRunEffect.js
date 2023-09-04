import React, { useEffect, useState } from 'react'

function ConditionRunEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(()=>{
        document.title =`You clicked ${count} times`
        console.log("useEffect - updating document title")
    },[count])
  return (

    <div>ConditionRunEffect <br/>
    <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
    <button onClick={()=> setCount(count+1)}>You clicked {count} times</button>
    </div>
  )
}

export default ConditionRunEffect