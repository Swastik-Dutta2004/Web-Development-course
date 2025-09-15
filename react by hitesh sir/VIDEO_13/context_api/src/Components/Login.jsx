import React, { useState, useContext } from 'react'
import userContext from '../Context/UserContext'

function Login() {
  const [username, setUsername] = useState('')
  const [Password, setPassword] = useState('')

  const { setuser } = useContext(userContext)

  const handlechange = (e) => {
    e.preventDefault()
    setuser({ username, Password })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-100 via-white to-orange-50">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-96 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🔐 Login</h2>

        <form className="space-y-6">
          {/* Username */}
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-700"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-700"
            />
          </div>

          {/* Button */}
          <button
            onClick={handlechange}
            className="w-full py-3 bg-orange-600 text-white font-semibold rounded-xl shadow-md hover:bg-orange-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{' '}
          <span className="text-orange-600 hover:underline cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login
