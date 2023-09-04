import React from 'react'
import ComponentE from './ComponentE'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function UseContext() {
  return (
    <div>
        <UserContext.Provider value={'Ahadbek'}>
            <ChannelContext.Provider value={'Qodirov'}>
                <ComponentE/>
            </ChannelContext.Provider>
        </UserContext.Provider>
    </div>
  )
}

export default UseContext