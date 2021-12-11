import React from 'react'
import {
  OverallContainer,
  IconWrapper,
  CloseIcon,
  MenuBtnContainer,
  MenuRoute,
  HamMenu,
  MenuLink
} from "./hamburgerMenuComponents";

const HamburgerMenu = ({isOn, toggle}) => {
  return (
    <>
      <OverallContainer isOn={isOn} onClick={toggle}>
        <IconWrapper onClick={toggle}>
          <CloseIcon />
        </IconWrapper>
        <div>
          <HamMenu>
            <MenuLink to="About" onClick={toggle}>
              About Us
            </MenuLink>
            <MenuLink to="Help" onClick={toggle}>
              Help
            </MenuLink>
            <MenuLink to="Instructions" onClick={toggle}>
              Instructions
            </MenuLink>
          </HamMenu>
          <MenuBtnContainer>
            <MenuRoute to="Report">Report Errors!</MenuRoute>
          </MenuBtnContainer>
        </div>
      </OverallContainer>
    </>
  )
}

export default HamburgerMenu;