import styled from "styled-components";
import {Link as LinkRouter} from "react-router-dom";

export const NavBarLinks = styled(LinkRouter)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &:active {
    border-bottom: 3px solid #8CA5AE
  }
`;

export const NavBarItem = styled.li`
  height: 80px;
`;

export const HamburgerIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.7rem;
    cursor: pointer;
    color: white;
  }
`;
export const OverallContainer = styled.nav`
  background-color: #1F435C;
  height: 80px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavItemsWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   z-index: 1;
   width: 100%;
   padding: 0 24px;
   max-width: 1100px;
`;

export const WebLogo = styled(LinkRouter)`
  color: white;
  font-size: 1.5rem;
  font-variant: small-caps;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  margin-left: 10px;
  margin-top: 20px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavBarList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: 25px;
  
  @media screen and (max-width: 768px) {
    display:none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const SpecialBtn = styled(LinkRouter)`
  border-radius: 50px;
  background-color: #8CA5AE;
  white-space: nowrap;
  padding: 10px 15px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #8CA5AE;
  }
 `;