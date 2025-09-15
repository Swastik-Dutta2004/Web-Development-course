import React, { useState, useContext } from 'react'
import UserConstext from '../assets/Context/UserConstext'

function Login() {
    const [Username, setUsername] = useState(second)
    const [Password, setPassword] = useState('')

    const {setuser} = useContext(UserConstext)
    const handlechange = (e) => {
        e.preventDefult()
        setuser(Username, Password)
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="User"
                placeholder='Username'
                value={Username}
                onChange={(e) => setuser(e.target.value)} />
            <input type="User"
                placeholder='Password'
                value={Password}
                onChange={(e) => setPassword(e.target.value)} />
                
            <button onClick={handlechange}>Submit</button>
        </div>
    )
}

export default Login