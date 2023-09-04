import React, { useContext, useEffect } from 'react'
import ComponentF from './ComponentF'
import { ChannelContext, UserContext } from '../App'

function ComponentE() {
const User = useContext(UserContext)
const Channel = useContext(ChannelContext)
  return (
    <div>
         {User} - {Channel}
    </div>
  )
}

export default ComponentE