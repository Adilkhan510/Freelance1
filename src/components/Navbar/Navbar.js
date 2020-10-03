import React, { useEffect, useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, NavIcon, HamburgerIcon, NavMenu, NavLinks, NavItem, LogoText, NavItmBtn, NavBtnLink } from './Navbar.elements'

import { Button } from '../../globalStyles'
const Navbar = () => {
    const [click, setClick] = useState(false);
    const [btn, setBtn] = useState(true)
    const handleClick = () => setClick(!click)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setBtn(false)
        } else {
            setBtn(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>


                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            <NavIcon />
                            <LogoText>
                                Ak development
                        </LogoText>

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
                            <NavItmBtn>
                                {
                                    btn ? (
                                        <NavBtnLink to="/sign-up">
                                            <Button primary>
                                                SIGN UP
                                            </Button>
                                        </NavBtnLink>
                                    ) : (
                                            <NavBtnLink to="/sign-up">
                                                <Button primary fontBig>
                                                    SIGN UP
                                                </Button>
                                            </NavBtnLink>
                                        )
                                }
                            </NavItmBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
