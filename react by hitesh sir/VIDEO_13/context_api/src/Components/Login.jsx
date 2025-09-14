import React from 'react'
import { useState, useContext } from 'react'
import userContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [Password, setPassword] = useState('')

    const {setuser} = useContext(userContext)
    const handlechange = (e) => {
       e.preventDefault()
       setuser({username, Password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username' />
            <input type="text"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' />
            <button onClick={handlechange}>Submit</button>
        </div>
    )
}

export default Login