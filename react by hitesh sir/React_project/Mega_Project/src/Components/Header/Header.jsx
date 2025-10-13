import React from 'react'
import { Container, Logo, LogoutBtn } from '../Index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const authService = useSelector((state) => state.auth.status)
  const navigate = useNavigate()


  const navItem = [
    {
      name: 'Home',
      slug: "/",
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
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItem .map((items) => 
              items.active ? (
                <li key={items.name}></li>
              ) : null
              )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
