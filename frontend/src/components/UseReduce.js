import React, { useReducer } from 'react'
const initialState = 0
const reducer =(state, action)=>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'resert':
            return initialState
        default:
            return state

    }
}
function UseReduce() {
    const [count, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <div>Count - {count} </div>
        <button onClick={()=> dispatch('increment')}>Increment</button>
        <button onClick={()=> dispatch('decrement')}>Decrement</button>
        <button onClick={()=> dispatch('resert')}>Resert</button>
    </div>
  )
}

export default UseReduce