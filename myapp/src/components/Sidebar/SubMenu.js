import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  border-bottom: 1px solid #444444;
  background: #f0f0f0;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  //background: #414757;
  background: #c2c4c7;
  border-bottom: 1px solid #444444;
  height: 35px;
  padding-left: 4rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  //color: #f5f5f5;
  font-size: 15px;
  &:hover {
    //background: #632ce4;
    background: #252831;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  console.log(item);
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav((subnav) => !subnav);
  };
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
