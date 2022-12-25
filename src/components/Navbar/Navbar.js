import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarStyles";
import { animateScroll as scroll } from "react-scroll";
import { websiteName } from "../../data/GlobalData";
import { navbarData } from "../../data/NavbarData";
import { useHistory } from "react-router-dom";

const Navbar = ({ hide }) => {
  const [show, setShow] = useState(false);

  const navigate = useHistory;
  const gallery = () => {
    navigate.push("/gallery");
  };

  return (
    <Nav hide={hide}>
      <NavbarContainer>
        <NavLogo to="/" onClick={scroll.scrollToTop}>
          <NavIcon src="./assets/final white.png" alt="" />
          {/* {websiteName} */}
        </NavLogo>

        {!hide && (
          <>
            <IconContext.Provider value={{ color: "white" }}>
              <MobileIcon onClick={() => setShow(!show)}>
                {show ? <FaTimes /> : <CgMenuRight />}
              </MobileIcon>
            </IconContext.Provider>
            <NavMenu hide={hide} show={show}>
              {navbarData.map((el, index) => (
                <NavItem key={index}>
                  <NavLinks
                    spy={true}
                    duration={500}
                    smooth={true}
                    exact="true"
                    offset={-79}
                    onClick={
                      /*{ el.text } = "Gallery"? { gallery }  :*/ () =>
                        setShow(false)
                    }
                    to={el.to}
                  >
                    {el.text}
                  </NavLinks>
                </NavItem>
              ))}
            </NavMenu>
          </>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
