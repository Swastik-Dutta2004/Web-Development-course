import React from 'react'
import Footer from './footer'

const Navbar = ({logoText}) => {
  return (
    <div>
      <div className='logo'>{logoText}</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <Footer/>
        </ul>
    </div>
  )
}

export default Navbar
