import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../SidebarTest/SidebarData';
import SubMenu from './Submenu';
import { IconContext } from 'react-icons/lib';
import './SidebarDash.css'
import { useMediaQuery } from 'react-responsive'
import { UserContext } from '../../App';

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
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://eco-shop-db.herokuapp.com/admin')
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])
    let makeAdmin;
    let role = 'user';
    if (admin.length > 0) {
        makeAdmin = admin.find(make => make.email === loggedInUser.email);
        if (makeAdmin) {
            role = 'admin';
        }

    }
    console.log(role);
  const [sidebar, setSidebar] = useState(true);
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

  

  
  //choose the screen size 
  



  return (
      <div>
      {
        role === 'admin' ?
        <div>
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

        </div> :
        <div>
          <h1>WelCome User</h1>
          <Link to="/">Homepage</Link>
        </div>
        
      }
      </div> 
      
      );
};

export default SidebarTest;
