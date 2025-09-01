import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-200 '>
        <div className='logo font-bold'>PAssManaGe</div>
        <ul>
            <li>
                <a href="">Home</a>
                <a href="">Contact</a>
                <a href="">About</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar