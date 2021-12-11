import React from "react";
import {FaBars} from "react-icons/fa";
import {
  OverallContainer,
  NavItemsWrapper,
  WebLogo,
  NavBarItem,
  NavBarList,
  NavBtn,
  NavBarLinks,
  HamburgerIcon, SpecialBtn
} from "./navBarComponents";

const NavBar = ({toggle}) => {
  return (
    <>
      <OverallContainer>
        <NavItemsWrapper>
          <WebLogo to="/">Super Cool MIPS Disassembler</WebLogo>
          <HamburgerIcon onClick={toggle}>
            <FaBars/>
          </HamburgerIcon>
          <NavBarList>
            <NavBarItem>
              <NavBarLinks to="About">About Us</NavBarLinks>
            </NavBarItem>
            <NavBarItem>
              <NavBarLinks to="Help">Help</NavBarLinks>
            </NavBarItem>
            <NavBarItem>
              <NavBarLinks to="Instructions">Instructions</NavBarLinks>
            </NavBarItem>
          </NavBarList>
          <NavBtn>
            <SpecialBtn to="Report">Report Errors!</SpecialBtn>
          </NavBtn>
        </NavItemsWrapper>
      </OverallContainer>
    </>
  )
}
export default NavBar;