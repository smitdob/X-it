import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FiShoppingCart } from 'react-icons/fi'
import { FaAlignRight } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import './Maincomponent.css'
const Nav = ({imgSrc}) => {
    // code for handle show and disable canvas
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <div className="nav-wrapper nav-desk">
            <ul className='nav-list'>
                <li><NavLink className='nav-links' to='/'>Home</NavLink></li>
                <li><NavLink className='nav-links' to='/about'>About</NavLink></li>
                <li><NavLink className='nav-links' to='/products'>Products</NavLink></li>
                <li><NavLink className='nav-links' to='/contact'>Contact</NavLink></li>
                <li><NavLink className='nav-links torlly-link' to='/cart'><FiShoppingCart className='nav-cart' /> <Badge badgeContent={4} color="primary"></Badge></NavLink></li>
            </ul>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <img src={imgSrc} alt="" className='nav-brand'/> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="nav-wrapper nav-mobile" >
            <ul className='nav-list'>
                <li><NavLink className='nav-links' to='/'>Home</NavLink></li>
                <li><NavLink className='nav-links' to='/about'>About</NavLink></li>
                <li><NavLink className='nav-links' to='/products'>Products</NavLink></li>
                <li><NavLink className='nav-links' to='/contact'>Contact</NavLink></li>
                <li><NavLink className='nav-links torlly-link' to='/cart'><FiShoppingCart className='nav-cart' /> <Badge badgeContent={4} color="primary"></Badge></NavLink></li>
            </ul>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
        <FaAlignRight className="hamburgur" onClick={handleShow} />
        </>
    )
}

export default Nav