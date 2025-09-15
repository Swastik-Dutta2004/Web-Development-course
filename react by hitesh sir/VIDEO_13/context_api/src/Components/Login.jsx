import React,{useState, useContext} from 'react'
import UserConstext from '../assets/Context/UserConstext'

function Login() {
    const [user, setuser] = useState(second)
    const [Password, setPassword] = useState('')
    const handlechange = ({setuser}) => {
        return 
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="User" value={user} onChange={(e) => setuser(e.target.value)} />
        <input type="User" value={Password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handlechange}>Submit</button>
    </div>
  )
}

export default Login