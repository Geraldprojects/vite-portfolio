import styled from "styled-components";
import CloseIcon from "../assets/close.svg";
import OpenIcon from "../assets/menu.svg";
import { useState } from "react";

const Menu = () => {
  const [MenuState, setMenuState] = useState(true);

  const ToggleMenu = () => {
    setMenuState(!MenuState);
  };
  const Nav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    align-items: centers;
    font-size: 14px;
    font-weight: 500;

    & img {
      width: 40px;
      height: 40px;
    }

    @media only screen and (max-width: 600px) {
      & .Menu-list.close {
        display: none;
      }
      & .Menu-list.open {
        display: flex !important;
        justify-content: center;
        flex-direction: column;
        border: 1px solid green;
        width: 100%;
        height: 100vh;
        margin: 0;
        border: 1px solid #64ffda;
        background-color: #6b6969;
      }
    }
  `;
  const Ul = styled.ul`
    display: flex;
    & li {
      margin-right: 40px;
      list-style: none;
      color: #fff;
    }

    & span {
      margin-right: 5px;
      color: #64ffda;
    }

    @media only screen and (max-width: 600px) {
      & li {
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;
      }
    }
  `;

  const MenuIcons = styled.div`
    display: none;
    align-items: center;
    right: 0;
    width: 40px;
    height: 40px;

    @media only screen and (max-width: 600px) {
      display: flex;
      position: absolute;
      margin: 10px 10px 0;
    }
  `;

  return (
    <Nav>
      <Ul className={MenuState ? "Menu-list close" : "Menu-list open"}>
        <li>
          <span>01.</span>Home
        </li>
        <li>
          <span>02.</span>Experiences
        </li>
        <li>
          <span>03.</span>Projects
        </li>
        <li>
          <span>04.</span>Contact
        </li>
        <li>
          <span>05.</span>Resume
        </li>
      </Ul>
      <MenuIcons>
        {MenuState ? (
          <img src={OpenIcon} onClick={ToggleMenu} />
        ) : (
          <img src={CloseIcon} onClick={ToggleMenu} />
        )}
      </MenuIcons>
    </Nav>
  );
};

export default Menu;
