import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../SidebarTest/SidebarData';
import SubMenu from './Submenu';
import { IconContext } from 'react-icons/lib';
import './SidebarDash.css'

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 20px;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  overflow-y:scroll;

`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarTest = () => {
  const [sidebar, setSidebar] = useState(true);
  

  return (
    <>
      <IconContext.Provider value={{ color: '#009E7F' }}>
        <h3>Dashboard</h3>
        <div className="sidebarWrap">
        <SidebarNav sidebar={sidebar}> 
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default SidebarTest;
