import { useState } from 'react'

import Register from '../rotes/Register'
import Login from '../rotes/Login'
import Home from '../rotes/main_page/Home'
import Edit_pro from '../rotes/main_page/Edit_pro'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
function App() {
 

  return (
   <div>

   <Routes>  
        <Route path = "login" element = { <Login />} />
        <Route path = "register" element = {<Register />} />
        <Route path = "home" element = { <Home />  }>
            <Route path='about-us' element = {<Edit_pro/>} />
                 
        </Route>
     </Routes>   
   </div>
  )
}

export default App
