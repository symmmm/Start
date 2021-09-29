import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData.js";
import SubMenu from "./SubMenu";
import {
  AppstoreFilled,
  ShoppingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
const Nav = styled.div`
  background: white;
  width: 100%;
  min-width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  //justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #444444;
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
  margin-right: 1rem;
  font-size: 2rem;
  height: 80px;
  display: none;
  justify-content: flex-start;
  //top: 0px;
  align-items: center;
  color: black;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
const NavText = styled(Link)`
  display: none;
  @media screen and (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    height: 70px;
    font-size: 20px;
    //border: 1px solid #444444;
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

const SidebarNav = styled.nav`
  display: none;
  //background: #15171c;
  background: #f0f0f0;
  width: 200px;
  height: 100vh;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 100;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <Nav>
        <NavIcon>
          <MenuOutlined onClick={showSidebar} />
        </NavIcon>
        <NavText to="/">MAIN</NavText>
        <NavIcon to="/cart">
          <ShoppingOutlined />
        </NavIcon>
        <NavTopMenu to="/">MAIN</NavTopMenu>
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
    </>
  );
};

export default Sidebar;
