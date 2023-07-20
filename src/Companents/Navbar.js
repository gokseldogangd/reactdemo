import React , { useEffect, useState }  from 'react'
import '../Css/navbar.css'
import { NavLink , Link } from 'react-router-dom'


function Navbar() {
  
  const [sticky,setSticky] =useState(false);

  useEffect(()=> {
      const handleScroll = () => {
        setSticky(window.scrollY > 200);
        
      }
      window.addEventListener('scroll' ,handleScroll);
      return () => window.removeEventListener('scroll',handleScroll);
  })


  return (
    <div className='navbar-head'>
    <nav className={`${sticky ? 'sticky' : "navbar"}`}>
        <div className='navlogo'>
        <Link to={'/'}> KOTA </Link>
        </div>
         
          <div className='navbar-nav'>
            <ul>
              <li className='nav-item'>
               <NavLink to={'/work'}>Work</NavLink>
              </li>
               <li className='nav-item'>
               <NavLink to={'/contact'}>Contact</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to={'/'}>Menu</NavLink>
              </li>
            </ul>
          </div>
    </nav>
 </div>
  )
}

export default Navbar