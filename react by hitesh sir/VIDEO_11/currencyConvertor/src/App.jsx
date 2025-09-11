import { useState } from 'react'
import {input} from './components'
import usecurrencyInfo from './hooks/usecurrencyinfo'
import './App.css'

function App() {
  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [To, setTo] = useState("inr")
  const [currencyConvertor, setCurrencyConvertor] = useState(0)
  
  return (
    <>
      <h1 className='text-center text-4xl font-bold bg-amber-950 text-white'>Currency Convertor</h1>
    </>
  )
}

export default App
