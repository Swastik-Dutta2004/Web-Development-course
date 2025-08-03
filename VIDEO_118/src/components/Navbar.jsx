import React from 'react'
import { memo } from 'react';

const Navbar = ({adjective, getadjective}) => {
    console.log("Navbar is render");
    
  return (
    <div>I am {adjective} Navbar
    <button onClick={() => {getadjective}}>{getadjective()}</button>
    </div>
  )
}

export default  memo(Navbar)