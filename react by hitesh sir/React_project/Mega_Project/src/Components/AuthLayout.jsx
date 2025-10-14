import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default AuthLayout = ({children, authentication = true}) => {
    const navigate = useNavigate()
    const [Loading, setLoading] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/Login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
    }, [navigate, authentication, authStatus])
    
    
  return (
    <div>AuthLayout</div>
  )
}

