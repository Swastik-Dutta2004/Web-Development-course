import React,{useContext} from 'react'
import { counterContext } from '../context/Context'

const Componenet1 = () => {
    const counter = useContext(counterContext)
  return (
    <div>{counter}</div>
  )
}

export default Componenet1