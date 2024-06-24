import { useState } from 'react'
import Heroone from './components/Heroone'

import './index.css'
import Herotwo from './components/Herotwo'
import Herothree from './components/Herothree'
import Herolast from './components/Herolast'
import Herocounter from './components/Herocounter'
import Heroflex from './components/Heroflex'





function App() {
  

  return (
    <>
        <Heroone />
         {/* <Herotwo /> */}
         <Herothree />
         <Heroflex />
         <Herocounter />
    
         <Herolast />
        
    </>
  )
}

export default App
