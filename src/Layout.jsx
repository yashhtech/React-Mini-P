import React from 'react'
import { Link,Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>

    <header>
        <nav>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/service'>Service</Link></li>
                <li><Link to='/mybooking'>Mybooking</Link></li>
            </ul>
        </nav>
    </header>


    <Outlet/>

    <footer>
       <h1> this is footer </h1>
    </footer>
      
    </>
  )
}

export default Layout
