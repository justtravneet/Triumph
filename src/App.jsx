import { useState } from 'react'
import Heroone from './components/Heroone'

import './index.css'
import Herotwo from './components/Herotwo'
import Herothree from './components/Herothree'
import Herolast from './components/Herolast'
import Herocounter from './components/Herocounter'





function App() {
  

  return (
    <>
        <Heroone />
         {/* <Herotwo /> */}
         <Herothree />
        
         <Herocounter />
        
         <Herolast />
        
    </>
  )
}

export default App
