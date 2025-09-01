import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-200 flex justify-between px-2 '>
        <div className='logo font-bold'>PAssManaGe</div>
        <ul className=''>
            <li className='flex gap-3'>
                <a href="">Home</a>
                <a href="">Contact</a>
                <a href="">About</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar