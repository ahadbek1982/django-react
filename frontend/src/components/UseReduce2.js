import React, { useReducer } from 'react'


const initialState = {
    firstcounter: 0
}
const reducer = (state, action)=>{
    switch(action){
        case 'increment':
            return state +1
        case 'decrement':
            return state -1
        case 'resert':
            return initialState
        default:
            return state
    }
}

function UseReduce2() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h1>Conter {count.firstcounter}</h1>
        <button onClick={()=> dispatch('increment')}>Icrement</button>
        <button onClick={()=> dispatch('decrement')}>Decrement</button>
        <button onClick={()=> dispatch('resert')}>Resert</button>
    </div>
  )
}

export default UseReduce2