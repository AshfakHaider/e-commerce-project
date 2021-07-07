import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled.div`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  margin-top:20px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid #009E7F;
    cursor: pointer;
    text-decoration:none;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled.div`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #632ce4;
    cursor: pointer;
    text-decoration:none;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    if(item.subNav){
      setSubnav(!subnav)
    }

    // setSubnav(!subnav)
  };


  return (
    <>
      <SidebarLink onClick={showSubnav}  >
          <div >
            {item.icon}
          
            <a href={item.path} style={{color:'white',textDecoration:'none'}}><SidebarLabel>{item.title}</SidebarLabel></a>
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
            <DropdownLink key={index}>
              {item.icon}
              <SidebarLabel><a href={item.path} className='text-white'>{item.title}</a></SidebarLabel>
            </DropdownLink>

          );
        })}
    </>
  );
};

export default SubMenu;
