import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../images/logo_.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faQuestionCircle, faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";
import Sidebar from '../Sidebar/Sidebar';
import SidebarTest from '../SidebarTest/SidebarTest';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
  return (
      <div className='font '>
        <nav class="navbar navbar-expand-lg navbar-light  ">
          <SidebarTest/>
          <a class="navbar-brand logo" href="/">
            <img src={logo} alt="" className='logoImg' />
          </a>

          <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="input col-md-6 mt-2 ms-5">
            <input type="text" placeholder="Search for products(e.g. eggs,milk,potato)" className='form-control' />
          </div>
          <FontAwesomeIcon icon={faSearch} className='navbar-icon search-icon' style={{ cursor: 'pointer' }} />

          <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09" >
            <ul class="navbar-nav ">
              <li class="nav-item d-flex">
                <FontAwesomeIcon icon={faMapMarkerAlt} className='navbar-icon me-2' />
                <h2 className='nav-text'>Dhaka</h2>
                <FontAwesomeIcon icon={faSortDown} className=' ms-2 arrow-icon' />
              </li>
              <li class="nav-item d-flex">
                <FontAwesomeIcon icon={faQuestionCircle} className='navbar-icon me-2' />
                <h2 className='nav-text' style={{ cursor: 'pointer' }}>Help & More</h2>
              </li>
              <li class="nav-item d-flex">
                <h2 className='nav-text' style={{ cursor: 'pointer' }}>EN | BN</h2>
              </li>
              <li class="navBtn d-flex">
                  <Link to ='/login'> <button className='signInBtn'> Sign In</button></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    

  );
};

export default Navbar;