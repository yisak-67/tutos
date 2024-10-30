import { useState } from 'react'
import "react-multi-carousel/lib/styles.css";
import Header from './ui/Header'
import BannerCategories from './ui/BAnnerCatagory'
import HomeBanner from './ui/HomeBanner';
import Hightlight from './ui/Hightlight';



function App() {
  const [count, setCount] = useState(0)

  return (
    <main>

<BannerCategories /> 
<HomeBanner />
<Hightlight />



    </main>
  
  )
}

export default App
