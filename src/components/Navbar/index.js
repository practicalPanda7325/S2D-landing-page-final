import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activestyle>
                        What's StackTooDeep?
                    </NavLink>
                    <NavLink to="/prizes" activeStyle>
                        Prizes
                    </NavLink>
                    <NavLink to="/schedule" activeStyle>
                        Schedule
                    </NavLink>
                    <NavLink to="/judges" activeStyle>
                        Judges
                    </NavLink>
                    <NavLink to="/faq" activeStyle>
                        FAQ
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;