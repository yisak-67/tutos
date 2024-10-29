import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './ui/Header'
import BannerCategories from './ui/BAnnerCatagory'



function App() {
  const [count, setCount] = useState(0)

  return (
    <main>

<BannerCategories /> 

    </main>
  
  )
}

export default App
