import React from 'react'
import { useParams } from 'react-router'

function User() {
  const { userID } = useParams()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-100 via-white to-orange-50">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">👤 User Profile</h1>
        <p className="text-lg text-gray-600">Welcome,</p>
        <p className="text-2xl font-semibold text-orange-600 mt-2">{userID}</p>
      </div>
    </div>
  )
}

export default User
