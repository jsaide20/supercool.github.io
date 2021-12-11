import styled from "styled-components";
import {Link as LinkRouter} from "react-router-dom";
import {FaTimes} from "react-icons/fa";

export const MenuLink = styled(LinkRouter)`
  display: flex;
  align-item: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: white;
  cursor: pointer;
  
  &:hover {
    color: #8CA5AE;
    transition: 0.2s ease-in-out;
  }
`;

//uses function isOn to determine when to present itself
export const OverallContainer = styled.aside`
  position: fixed;
  z-index: 500;
  width: 100%;
  height: 100%;
  background-color: #1F435C;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.35s ease-in-out;
  opacity: ${({isOn}) => (isOn ? '100%' : '0%')};
  top: ${({isOn}) => (isOn ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const HamMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0px;
  grid-template-rows: repeat(5, 80px);
  text-align: center;
`;

export const MenuBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MenuRoute = styled(LinkRouter)`
  border-radius: 50px;
  background: #8CA5AE;
  white-space: nowrap;
  padding: 16px 50px;
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