import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const authStatus = useSelector((state) => state.auth.status)

  useEffect(() => {
    // if authentication is required but user is not logged in
    if (authentication && !authStatus) {
      navigate('/login')
    }
    // if authentication is not required but user is logged in
    else if (!authentication && authStatus) {
      navigate('/')
    }
    setLoading(false)
  }, [navigate, authentication, authStatus])

  return loading ? <h1>Loading...</h1> : <>{children}</>
}
