import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './Context/Theme'

function App() {
  const [themeMode, setthemeMode] = useState("light")

  const darkMode = () => {
    setthemeMode("dark")
  }
  
  const lightMode = () => {
    setthemeMode("light")
  }

  return (
    <ThemeProvider value={{theme, darkMode, lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* ThemeBtn*/}
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
