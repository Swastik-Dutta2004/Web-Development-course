import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,multiply } from './redux/counter/counterSlice'
import Navbar from './components/Navbar'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
   <>
   <Navbar/>
    <div className='buttons'>
      <button onClick={()=> {dispatch(decrement())}}>-</button>
      currenty the value is {count}
      <button onClick={() => {dispatch(increment())}}>+</button>
    </div>
   </>
  )
}

export default App
