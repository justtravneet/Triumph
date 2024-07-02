import  React from 'react'

import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Heroone from './components/Heroone'
import Herolast from './components/Herolast'
import Contactus from './components/Contactus'
import Search from './components/Search'
import Home from './components/Home';
import Slide from './components/Slide';








function App() {
   

  return (
    <> 
      
      <BrowserRouter>
         <Heroone />
         
            <Routes>
                
                 <Route path="/Triumph" element={ <Home />} />
                 <Route path="/" element={ <Home />} />
                 <Route path="/shop" element={ <Search />} />
                 <Route path="/Contact-us" element={ <Contactus />} />
            </Routes>
         <Herolast />
      </BrowserRouter>
     
      
       
         
         
    
        
        
    </>
  )
}

export default App
