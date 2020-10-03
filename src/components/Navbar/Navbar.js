import React, { useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavIcon, HamburgerIcon, NavMenu, NavLinks, NavItem } from './Navbar.elements'
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <NavIcon />
                        Ultra design
                    </NavLogo>
                    <HamburgerIcon onClick={handleClick}>
                        {
                            click ? <FaTimes /> : <FaBars />
                        }
                    </HamburgerIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/'>Services</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar