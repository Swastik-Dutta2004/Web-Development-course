import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Navbar = () => {
const count = useSelector((state) => state.counter.value)

  return (
    <div>I am Navbar i work is to showing count{count}</div>
  )
}

export default Navbar