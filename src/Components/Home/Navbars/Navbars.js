import React, { useState } from 'react';
import './Navbars.css'

const Navbars = () => {
    const [active,setActive] = useState('navMenu')
    const [toggleIcon,setToggleIcon] = useState('hamburger')
    const hamburget = ()=>{
        active === 'navMenu' ? setActive('navMenu active') : setActive('navMenu')
        toggleIcon === 'hamburger' ? setToggleIcon('toggle'):setToggleIcon('hamburger')
    }
   
    return (
        <nav className='nav'>
            <a className='brand'>
                Dxdc .
            </a>
            <ul className={active} >
                <li className='navItem'><a className='navLink'>Home</a></li>
                <li className='navItem'><a className='navLink'>Contact us</a></li>
                <li className='navItem'><a className='navLink'>Blog</a></li>
                <li className='navItem'><a className='navLink'>portfolio</a></li>
            </ul>
            <div onClick={hamburget} className={toggleIcon}>
                <span className='Line bar'></span>
                <span className='Line bar'></span>
                <span className='Line bar'></span>
            </div>
        </nav>
    );
};

export default Navbars;