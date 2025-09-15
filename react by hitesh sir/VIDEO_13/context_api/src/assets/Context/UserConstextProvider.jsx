import React from 'react'
import UserConstext from './UserConstext'

const UserConstextProvider = ({children}) => {
    const [user, setuser] = useState(null)
  return (
    <UserConstext.Provider value={{user, setuser}}>
        {children}
    </UserConstext.Provider>
  )
}

export default UserConstextProvider