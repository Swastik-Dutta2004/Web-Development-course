import { useState } from 'react'
import {input} from './components'
import usecurrencyInfo from './hooks/usecurrencyinfo'
import './App.css'

function App() {
  const [amount, setamount] = useState(0)
  const [from, setfrom] = useState("usd")
  const [To, setTo] = useState("inr")
  const [CurrencyConvertor, setCurrencyConvertor] = useState(0)

  const currencyInfo = usecurrencyInfo(from)
  const option = Object.keys(currencyInfo)

  const swap = () => {
    setfrom(To)
    setTo(from)
    setamount(CurrencyConvertor)
    setCurrencyConvertor(amount)

    const convert = () => {
      amount * currencyInfo(To)
    }
  }
  return (
    <>
      <h1 className='text-center text-4xl font-bold bg-amber-950 text-white'>Currency Convertor</h1>
    </>
  )
}

export default App
