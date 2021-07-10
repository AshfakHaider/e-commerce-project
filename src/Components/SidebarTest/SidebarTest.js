import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../SidebarTest/SidebarData';
import SubMenu from './Submenu';
import { IconContext } from 'react-icons/lib';
import './SidebarDash.css'
import { useMediaQuery } from 'react-responsive'

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
  const [sidebar, setSidebar] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setSidebar(false)
    } else {
      setSidebar(true)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  const showSidebar = () => setSidebar(!sidebar);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: ' (min-width: 481px) and (max-width: 767px) ' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(min-width: 320px) and (max-width: 480px) '
  })

  
  //choose the screen size 
  



  return (
    <>
      <IconContext.Provider value={{ color: '#009E7F' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <div className="sidebarWrap">
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to='#'>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>

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
