import React from 'react'
import { Container, Logo, LogoutBtn } from '../Index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const authService = useSelector((state) => state.auth.status)
  const navigate =  useNavigate()


  const navItem = [
    {
      name: 'Home',
      slug:  "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Sigup",
      slug: "/Sigup",
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: "/all-Post",
      active: authStatus
    },
    {
      name: "Add Post",
      slug: "/add-Post",
      active: authStatus
    },
  ]
  return (
    <header></header>
  )
}

export default Header
