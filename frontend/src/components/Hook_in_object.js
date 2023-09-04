import React, { useState } from 'react'

function Hook_in_object() {
    const [name, setName] = useState({
        firstname: '',
        lastname: '',
    })
  return (
    <div>Hook_in_object <br/>
        <form>
            <input type='text' value={name.firstname} onChange={e=> setName({...name, firstname: e.target.value})}/>
            <input type='text' value={name.lastname} onChange={e=> setName({...name, lastname: e.target.value})}/>
            <h4>your firstname is {name.firstname}</h4>
            <h4>your lastname is {name.lastname}</h4>
            <h3>{JSON.stringify(name)}</h3>
        </form>

    </div>
  )
}

export default Hook_in_object