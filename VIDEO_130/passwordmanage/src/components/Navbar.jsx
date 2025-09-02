import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white '>
      <div className="mycontainer flex justify-between px-2 py-7 h-10 items-center">
        <div className='logo font-bold text-xl'>
          <span className='text-green-800'>&lt;PA</span>
          ssMana
          <span className='text-green-800'>Ge/&gt;</span>
        </div>
        <ul className=''>
          <li className='flex gap-3'>
            <a className='hover:font-bold' href="">Home</a>
            <a className='hover:font-bold' href="">Contact</a>
            <a className='hover:font-bold' href="">About</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar