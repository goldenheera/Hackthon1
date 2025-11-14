import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {

  return (
    <div>
     <Navbar />
     <Outlet />
     <footer> made for sunbeam</footer>
    </div>
  )
}

export default Home
