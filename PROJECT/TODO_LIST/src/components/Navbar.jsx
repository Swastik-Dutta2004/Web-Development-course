import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex bg-green-950 text-white justify-between py-2'>
        <div className="logo">
          <span className=' m-2 font-bold text-xl'>iTxK</span>
        </div>
        <div>
          <ul className='flex gap-5'>
            <li className='cursor-pointer
            hover:font-bold translate-all'>Home</li>
            <li className='cursor-pointer
            hover:font-bold translate-all'>About</li>
            <li className='cursor-pointer
            hover:font-bold translate-all'>Contact us</li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar
