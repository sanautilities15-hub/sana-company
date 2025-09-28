import { useState } from 'react'
import reactLogo from './assets/react.svg'


import HomePage from './components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HomePage />
    </>
  )
}

export default App
