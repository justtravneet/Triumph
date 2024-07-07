import  React from 'react'

import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Heroone from './components/Heroone'
import Herolast from './components/Herolast'
import Contactus from './components/Contactus'
import Search from './components/Search'
import Home from './components/Home';
import About from './components/About';
import Addtocart from './components/Addtocart';
import Wishlist from './components/Wishlist';
import Productdetails from './components/Productdetails';








function App() {
   

  return (
    <> 
      
      <BrowserRouter>
         <Heroone />
         
            <Routes>
                
                 <Route path="/Triumph" element={ <Home />} />
                 <Route path="/" element={ <Home />} />
                 <Route path="/Triumph/shop" element={ <Search />} />
                 <Route path="Triumph/Contact-us" element={ <Contactus />} />
                 <Route path="Triumph/About-us" element={ <About/>} />
                 <Route path="Triumph/Add-to-cart" element={ <Addtocart/>} />
                 <Route path="Triumph/Wishlist" element={ <Wishlist/>} />
                 <Route path="Triumph/Product-details" element={ <Productdetails/>} />

            </Routes>
         <Herolast />
      </BrowserRouter>
     
      
       
         
         
    
        
        
    </>
  )
}

export default App
