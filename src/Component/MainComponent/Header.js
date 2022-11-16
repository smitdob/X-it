import React from 'react'
import { NavLink } from 'react-router-dom'
import './Maincomponent.css'
import Nav from './Nav'
const Header = () => {
  const imgSrc= 'https://xitbd.com/assets/img/x.png'
    return (
   <>
        <div className='header-wrapper'>
            <NavLink to='/'>
                <img src={imgSrc} alt=" site logo" className='nav-brand'/>
            </NavLink>
            <Nav imgSrc={imgSrc}/>
        </div>
    </>
  )
}

export default Header