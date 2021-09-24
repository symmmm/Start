import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData.js";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { Tabs } from "antd";

const Nav = styled.div`
  background: grey;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  //justify-content: space-around;
  align-items: center;
  border: 1px solid #444444;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Testbar = styled.div`
  background: orange;
  display: flex;
  height: 70px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 2rem;
  height: 80px;
  display: none;
  justify-content: flex-start;
  //top: 0px;
  align-items: center;
  color: blue;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
const NavText = styled(Link)`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    height: 70px;
    font-size: 15px;
    border: 1px solid #444444;
  }
`;

const NavTopMenu = styled(Link)`
  color: black;
  display: flex;
  margin: 10px;
  align-items: center;
  cursor: pointer;
  font-size: 25px;
  @media screen and (max-width: 768px) {
    display: none;
    ${NavIcon} {
      display: flex;
    }
  }
`;

const NavTop = styled.div`
  //background-color: red;
  display: flex;
  justify-content: space-around;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <NavText>아이콘</NavText>
          <NavText to="/cart">장바구니</NavText>
          <NavTopMenu to="/">아이콘</NavTopMenu>
          <NavTopMenu to="/store/Newarrival">STORE</NavTopMenu>
          <NavTopMenu>LOOKBOOK</NavTopMenu>
          <NavTopMenu>COMMUNITY</NavTopMenu>
          <NavTopMenu>MYPAGE</NavTopMenu>
          <NavTopMenu>CART</NavTopMenu>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
