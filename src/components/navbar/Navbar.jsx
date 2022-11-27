import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/logo_transparent.png'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    
    return(
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wIterate">What is JustOnce?</a></p>
                </div>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#wIterate">What is Iterate?</a></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar